import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Languages } from "../components/Language";
import { signupUserFunction } from "../utils/LoginUtil";

export default function Signup() {
  const navigate = useNavigate();
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    language: "",
    contact: "",
    type: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    if(validateData()){
      const user = await signupUserFunction(formData);
      navigate('/');
    }

    alert("Signup Successful!");
    // Optionally reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      language: "",
      contact: "",
      type: "",
    });
  };

  const validateData = () => {
    return formData.firstName?.length && formData.lastName?.length && formData.email?.length && formData.password?.length;
  }

  return (
    <>
      <Navbar />
      <div className="signup">
        <section className="signupSection">
          <h3 className="signup-heading">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            {/* Language Select */}
            <div className="mb-3">
              <select
                name="language"
                className="form-select"
                aria-label="Select Language"
                value={formData.language}
                onChange={handleChange}
                required
              >
                <option value="">Select Language</option>
                {Languages.map((lang) => (
                  <option key={lang.id} value={lang.value}>
                    {lang.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="contact"
                className="form-control"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <select
                name="type"
                className="form-select"
                aria-label="Select Role"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="Viewer">Viewer</option>
                <option value="Seller">Seller</option>
              </select>
            </div>

            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
          </form>

          <span className="signup-link">
            Already Registered? <Link to="/login">Login</Link>
          </span>
        </section>
      </div>
      <Footer />
    </>
  );
}
