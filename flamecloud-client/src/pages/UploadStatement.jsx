import { useState } from "react";
import { useNavigate } from "react-router-dom"
import API from "../api/axios"
import Loading from "./Loading"
import "../styles/upload.css"

function UploadStatement() {
     const navigate = useNavigate()
     const [file, setFile] = useState(null)
     const [message, setMessage] = useState("")
     const [loading, setLoading] = useState(false)

     const handleFileChange = (e) => setFile(e.target.files[0])

     const handleUpload = async (e) => {
          e.preventDefault();
          if (!file) return setMessage("Please select a file");

          const formData = new FormData();
          formData.append("statement", file);

          setLoading(true);
          setMessage("");

          try {
               const res = await API.post("/transactions/upload-statement", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
               });
               console.log(res.data);
               navigate("/dashboard", {
                    state: { summary: res.data.summary, transactions: res.data.transactions },
               });
          } catch (err) {
               setMessage(err.response?.data?.message || "Upload failed");
          } finally {
               setLoading(false);
          }
     };

     if (loading) return <Loading message="Uploading statement, please wait..." />;

     return (
          <div className="upload-container">
               <h2>Upload Bank Statement</h2>
               <form onSubmit={handleUpload}>
                    <input type="file" onChange={handleFileChange} accept=".pdf,.csv,.txt" />
                    <button type="submit" disabled={loading}>Upload</button>
               </form>
               {message && <p className="message">{message}</p>}
          </div>
     );
}

export default UploadStatement;
