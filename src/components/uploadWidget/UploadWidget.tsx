import { Dispatch, SetStateAction, useState } from "react";
import "./uploadWidget.css";

function UploadWidget({
  setAvatar,
}: {
  setAvatar: Dispatch<SetStateAction<string>>;
}) {
  const [error, setError] = useState<string>("");
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.currentTarget.files?.[0];
    const maxSize = 2000000;
    if (newFile) {
      console.log(newFile);

      if (newFile.size > maxSize) {
        setError("Image too large");
        return;
      }
      setError("");
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target?.result as string);
      };
      reader.readAsDataURL(newFile);
    }
  };
  return (
    <div className="upload-container">
      <label htmlFor="file-input" className="upload-label">
        Upload
      </label>
      <input
        type="file"
        accept="image/*"
        name=""
        id="file-input"
        onChange={handleChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default UploadWidget;
