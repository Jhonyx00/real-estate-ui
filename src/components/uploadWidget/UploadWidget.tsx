import { Dispatch, SetStateAction, useState } from "react";
import "./uploadWidget.css";

function UploadWidget({
  currentImage,
  multiple,
  setState,
}: {
  currentImage: string[];
  multiple: boolean;
  setState: Dispatch<SetStateAction<string[]>>;
}) {
  const [preview, setPreview] = useState<ArrayBuffer | string | null>();

  const UPLOAD_PRESET = "estate";
  const CLOUD_NAME = "dxcv8y8fz";

  const handleUpload = async (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = target.files;
    const fileReader = new FileReader();

    fileReader.onload = async () => {
      setPreview(fileReader.result);
    };

    if (!files) return;

    const formData = new FormData();

    formData.append("upload_preset", UPLOAD_PRESET);
    Array.from(files).forEach(async (file, index) => {
      formData.append("file", file);

      try {
        const res: Response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
          { method: "POST", body: formData }
        );
        const data = await res.json();
        setState((prev: string[]) => [...prev, data.secure_url]);
        console.log(data);
        fileReader.readAsDataURL(files[index]);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <>
      {Array.isArray(currentImage) ? (
        <div className="images-container">
          {currentImage.map((image, index) => (
            <img src={image} key={index} alt="" />
          ))}
        </div>
      ) : (
        <img
          src={(preview as string) || currentImage || "/avatar.png"}
          alt=""
          className="profile-image"
        />
      )}
      <input
        type="file"
        id="file-input"
        accept="image/*"
        multiple={multiple}
        onChange={handleUpload}
      />
      <label htmlFor="file-input" className="upload-label">
        Upload
      </label>
    </>
  );
}
export default UploadWidget;
