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
      response.status(500).json({ message: "Form parsing error" });
      return;
    }

    const uploadedUrls = [];

    for (const file of Object.values(files).flat()) {
      const { filepath, newFilename } = file;
      try {
        const result = await cloudinary.v2.uploader.upload(filepath, {
          public_id: newFilename,
          folder: "nf",
        });
        uploadedUrls.push(result.secure_url);
      } catch (error) {
        response.status(500).json({ message: "Upload error", error });
        return;
      }
    }

    response.status(200).json(uploadedUrls);
  });
}
