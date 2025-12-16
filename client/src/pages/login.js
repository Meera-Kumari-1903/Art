import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUserFunction } from "../utils/LoginUtil";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log("Login submitted with credentials:", credentials);
    if (validate()) {
      const user = await loginUserFunction(credentials);
      navigate("/");
    }
  };

  const validate = () => {
    return credentials.email?.length > 0 && credentials.password?.length > 0;
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <section className="loginSection">
          <h3 className="login-heading">Login</h3>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
          </form>

          <span className="signup-link">
            New User? <Link to="/signup">Sign Up</Link>
          </span>
        </section>
      </div>
      <Footer />
    </>
  );
}
