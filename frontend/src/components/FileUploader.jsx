import { useState } from "react";
import { uploadFile } from "../services/uploadService";

function FileUploader() {
  const [url, setUrl] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const downloadURL = await uploadFile(file);
    setUrl(downloadURL);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {url && <a href={url} target="_blank">Download Uploaded File</a>}
    </div>
  );
}

export default FileUploader;
