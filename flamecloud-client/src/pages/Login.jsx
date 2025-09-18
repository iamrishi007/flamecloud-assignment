import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import API from "../api/axios"
import Loading from "./Loading"
import "../styles/auth.css"



function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const res = await API.post("/users/login", formData)
      setMessage(res.data.message || "Login successful!")
      localStorage.setItem("token", res.data.token)
      navigate("/upload");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed")
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading message="Logging in, please wait..." />

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit" disabled={loading}>Login</button>
      </form>
      {message && <p className="message">{message}</p>}
      <Link to="/register">New user? Register here</Link>
    </div>
  );
}

export default Login;
