import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-grey)" : "var(--light-green)"};
  padding: 20px;
  border-radius: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 1px solid ${(props) => (props.darkMode ? "white" : "black")};
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-grey)" : "white"};
  color: ${(props) => (props.darkMode ? "var(--dark-text-color)" : "black")};
  border-radius: 0.5rem;
`;

const Select = styled.select`
  border: 1px solid ${(props) => (props.darkMode ? "white" : "black")};
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-light-grey)" : "white"};
  color: ${(props) => (props.darkMode ? "var(--dark-text-color)" : "black")};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-primary-color)" : "var(--primary-color)"};
  color: ${(props) =>
    props.darkMode ? "var(--dark-light-green)" : "var(--light-yellow)"};
  border: 2px solid
    ${(props) =>
      props.darkMode ? "var(--dark-primary-color)" : "var(--primary-color)"};
  border-radius: 2rem;
  padding: 10px;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  max-width: 100px;
  width: 100%;
  &:hover {
    background-color: ${(props) =>
      props.darkMode ? "var(--dark-light-green)" : "var(--light-green)"};
    color: ${(props) =>
      props.darkMode ? "var(--dark-primary-color)" : "var(--primary-color)"};
  }
`;

const StyledFileInput = styled(Input).attrs({
  type: "file",
  multiple: true,
})`
  padding: 8px;
  border: none;
  &:focus {
    border-color: ${(props) =>
      props.darkMode ? "var(--dark-border-focus-color)" : "#0056b3"};
    outline: none;
  }
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 1px solid ${(props) => (props.darkMode ? "white" : "black")};
  background-color: ${(props) =>
    props.darkMode ? "var(--dark-input-bg)" : "white"};
  color: ${(props) => (props.darkMode ? "var(--dark-text-color)" : "black")};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Fieldset = styled.fieldset`
  border: 1px solid ${(props) => (props.darkMode ? "white" : "black")};
  border-radius: 0.5rem;
`;

const CheckboxContainer = styled.div`
  text-align: center;
`;

const LabelCheckbox = styled.label`
  margin: 0.5rem;
  font-weight: bold;
`;

const Label = styled.label`
  font-weight: bold;
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

const Legend = styled.legend`
  font-weight: bold;
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FileListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 0.5rem;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 1.5rem;
`;

const Thumbnail = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const UploadMessage = styled.p`
  color: red;
  font-size: 0.8rem;
`;
const UploadInfo = styled.p`
  color: ${(props) => (props.darkMode ? "white" : "var(--dark-light-grey)")};
  font-size: 0.8rem;
`;

export default function CreatePlantForm({
  defaultData,
  formName,
  onSubmit,
  isSubmitting,
  darkMode,
}) {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [uploadedFileNames, setUploadedFileNames] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const [waterNeed, setWaterNeed] = useState("");
  const [lightNeed, setLightNeed] = useState("");
  const [seasons, setSeasons] = useState({
    Spring: false,
    Summer: false,
    Fall: false,
    Winter: false,
  });
  const [maxUploadsReached, setMaxUploadsReached] = useState(false);

  useEffect(() => {
    if (defaultData) {
      setUploadedFileNames(defaultData.images || []);
      setWaterNeed(defaultData.water_need || "");
      setLightNeed(defaultData.light_need || "");
      setSeasons({
        Spring: defaultData.fertiliser_season?.includes("Spring") || false,
        Summer: defaultData.fertiliser_season?.includes("Summer") || false,
        Fall: defaultData.fertiliser_season?.includes("Fall") || false,
        Winter: defaultData.fertiliser_season?.includes("Winter") || false,
      });
    }
  }, [defaultData]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSeasons((prevSeasons) => ({
      ...prevSeasons,
      [id]: checked,
    }));
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + uploadedFileNames.length > 3) {
      setMaxUploadsReached(true);
      setImages([]);
    } else {
      setMaxUploadsReached(false);
      setImages(files);
    }
  };

  const handleDeleteImage = (imageName) => {
    setUploadedFileNames((oldFileNames) =>
      oldFileNames.filter((name) => name !== imageName)
    );
    setDeletedImages((oldDeletedImages) => [...oldDeletedImages, imageName]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const imageUrls = await uploadImages(images);
    const filteredUploadedFileNames = uploadedFileNames.filter(
      (fileName) => !deletedImages.includes(fileName)
    );

    const plantData = Object.fromEntries(formData);
    const selectedSeasons = Object.keys(seasons).filter(
      (season) => seasons[season]
    );
    plantData.fertiliser_season = selectedSeasons;
    plantData.images = [...filteredUploadedFileNames, ...imageUrls];
    plantData.deletedImages = deletedImages;

    onSubmit(plantData);

    event.target.reset();
    setWaterNeed("");
    setLightNeed("");
    setSeasons({
      Spring: false,
      Summer: false,
      Fall: false,
      Winter: false,
    });
    setImages([]);
    setUploadedFileNames([]);
    setDeletedImages([]);
    setMaxUploadsReached(false);
  };

  const uploadImages = async (images) => {
    if (images.length === 0) return [];

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading images");
      }

      const imageUrls = await response.json();
      return imageUrls;
    } catch (error) {
      console.error("Error uploading images:", error);
      return [];
    }
  };

  return (
    <FormContainer
      aria-labelledby={formName}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      darkMode={darkMode}
    >
      <Label htmlFor="name" darkMode={darkMode}>
        *Plant Name:{" "}
      </Label>
      <Input
        id="name"
        name="name"
        type="text"
        required
        maxLength={150}
        defaultValue={defaultData?.name}
        darkMode={darkMode}
      />
      <Label htmlFor="botanical_name" darkMode={darkMode}>
        *Botanical Name
      </Label>
      <Input
        id="botanical_name"
        name="botanical_name"
        type="text"
        required
        maxLength={150}
        defaultValue={defaultData?.botanical_name}
        darkMode={darkMode}
      />
      <Label htmlFor="water_need" darkMode={darkMode}>
        *Water Needs:
      </Label>
      <Select
        id="water_need"
        name="water_need"
        required
        value={waterNeed}
        onChange={(event) => setWaterNeed(event.target.value)}
        darkMode={darkMode}
      >
        <option value="">Select water needs</option>
        <option value="Low">Low</option>
        <option value="Moderate">Moderate</option>
        <option value="High">High</option>
      </Select>
      <Label htmlFor="light_need" darkMode={darkMode}>
        *Light Needs:
      </Label>
      <Select
        id="light_need"
        name="light_need"
        required
        value={lightNeed}
        onChange={(event) => setLightNeed(event.target.value)}
        darkMode={darkMode}
      >
        <option value="">Select light needs</option>
        <option value="Shady">Shady</option>
        <option value="Partial shade">Partial shade</option>
        <option value="Bright">Bright</option>
      </Select>
      <Fieldset darkMode={darkMode}>
        <Legend darkMode={darkMode}>
          Please choose your fertiliser seasons
        </Legend>
        <CheckboxContainer>
          <LabelCheckbox htmlFor="spring">
            Spring
            <Input
              type="checkbox"
              id="Spring"
              name="fertiliser_season"
              value="Spring"
              checked={seasons.Spring}
              onChange={handleCheckboxChange}
              darkMode={darkMode}
            />
          </LabelCheckbox>{" "}
          <LabelCheckbox htmlFor="summer">
            Summer
            <Input
              type="checkbox"
              id="Summer"
              name="fertiliser_season"
              value="Summer"
              checked={seasons.Summer}
              onChange={handleCheckboxChange}
              darkMode={darkMode}
            />
          </LabelCheckbox>{" "}
          <LabelCheckbox htmlFor="fall">
            Fall
            <Input
              type="checkbox"
              id="Fall"
              name="fertiliser_season"
              value="Fall"
              checked={seasons.Fall}
              onChange={handleCheckboxChange}
              darkMode={darkMode}
            />
          </LabelCheckbox>{" "}
          <LabelCheckbox htmlFor="winter">
            Winter
            <Input
              type="checkbox"
              id="Winter"
              name="fertiliser_season"
              value="Winter"
              checked={seasons.Winter}
              onChange={handleCheckboxChange}
              darkMode={darkMode}
            />
          </LabelCheckbox>
        </CheckboxContainer>
      </Fieldset>
      <Label htmlFor="care_instructions" darkMode={darkMode}>
        Care Instructions:{" "}
      </Label>
      <Textarea
        name="care_instructions"
        id="care_instructions"
        cols="30"
        rows="10"
        maxLength={150}
        defaultValue={defaultData?.care_instructions}
        darkMode={darkMode}
      ></Textarea>
      <br />
      <Label darkMode={darkMode} htmlFor="images">
        Add Photos:
      </Label>
      <StyledFileInput
        id="images"
        name="images"
        multiple
        onChange={handleFileChange}
        disabled={uploadedFileNames.length >= 3}
        darkMode={darkMode}
      />
      <UploadInfo darkMode={darkMode}>Maximum 3 images</UploadInfo>
      {maxUploadsReached && (
        <UploadMessage>Maximum number of uploads exceeded.</UploadMessage>
      )}

      <FileList>
        {uploadedFileNames.map(
          (fileName) =>
            !deletedImages.includes(fileName) && (
              <FileListItem key={fileName}>
                <Thumbnail src={fileName} alt="Uploaded Image" />
                <DeleteButton
                  type="button"
                  onClick={() => handleDeleteImage(fileName)}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </DeleteButton>
              </FileListItem>
            )
        )}
      </FileList>
      <StyledButton type="submit" disabled={isSubmitting} darkMode={darkMode}>
        {defaultData ? "Update Plant" : "Add Plant"}
      </StyledButton>
      <StyledButton
        type="button"
        onClick={() => router.back()}
        darkMode={darkMode}
      >
        Cancel
      </StyledButton>
    </FormContainer>
  );
}
