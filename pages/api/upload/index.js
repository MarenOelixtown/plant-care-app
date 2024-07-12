import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(400).json({ message: "Method not allowed" });
    return;
  }

  const form = formidable({ multiples: true });

  form.parse(request, async (err, fields, files) => {
    if (err) {
      response.status(500).json({ error: "Error parsing form" });
      return;
    }

    const imageUploadPromises = Object.values(files.images).map(
      async (file) => {
        const result = await cloudinary.v2.uploader.upload(file.filepath, {
          public_id: file.newFilename,
          folder: "nf",
        });
        return result.secure_url;
      }
    );

    try {
      const images = await Promise.all(imageUploadPromises);
      response.status(201).json({ images });
    } catch (uploadError) {
      response.status(500).json({ error: "Error uploading images" });
    }
  });
}
