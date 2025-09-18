import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import API from "../api/axios"
import Loading from "./Loading"
import "../styles/auth.css"

function Register() {
     const navigate = useNavigate();
     const [formData, setFormData] = useState({ name: "", email: "", password: "" });
     const [message, setMessage] = useState("");
     const [loading, setLoading] = useState(false);

     const handleChange = (e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })

     const handleSubmit = async (e) => {
          e.preventDefault();
          setMessage("");
          setLoading(true);
          try {
               const res = await API.post("/users/register", formData)
               setMessage(res.data.message || "Registration successful!")
               navigate("/login");
          } catch (err) {
               setMessage(err.response?.data?.message || "Registration failed")
          } finally {
               setLoading(false);
          }
     };

     if (loading) return <Loading message="Registering, please wait..." />

     return (
          <div className="auth-container">
               <h2>Register</h2>
               <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
                    <button type="submit" disabled={loading}>Register</button>
               </form>
               {message && <p className="message">{message}</p>}
               <Link to="/login">Already registered? Login here</Link>
          </div>
     );
}

export default Register;
