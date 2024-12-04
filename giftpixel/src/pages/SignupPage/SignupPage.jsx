import { useState } from "react";

import "../../styles/SignupPage.css"
import Input from "../../components/Inputs";
import Button from "../../components/Button";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const passwordCriteria = [
    { label: "At least 8 characters", isValid: formData.password.length >= 8 },
    { label: "At least one uppercase", isValid: /[A-Z]/.test(formData.password) },
    { label: "At least one number", isValid: /\d/.test(formData.password) },
    { label: "At least one special character", isValid: /[!@#$%^&*]/.test(formData.password) },
  ];

  return (
    <div className="signup-page">
      <div className="welcome-section">
        <h1>Welcome to GiftPixel</h1>
        <p>Share Meaningful Promises With Your Loved Ones</p>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-row">
  <div className="input-container">
    <Input
      label="First name"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      placeholder="e.g John"
    />
  </div>
  <div className="input-container">
    <Input
      label="Last name"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      placeholder="e.g Doe"
    />
  </div>
</div>
        <Input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="e.g JohnDoe"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g johndoe@gmail.com"
        />
          <div className="phone-group">
  <div className="phone-input">
   
    <Input
      label="Phone number"
      name="phone"
      type="tel"
      value={formData.phone}
      onChange={handleChange}
      placeholder="9023428933"
      styleClass="phone-number"
    />
  </div>
</div>


        <div className="password-group">
        <Input
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          placeholder="e.g Dawson12"
          styleClass="custom-password-input"
        />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "" : ""}
          </span>
        </div>
        <ul className="validation-list">
          {passwordCriteria.map((criterion, index) => (
            <li key={index} className={criterion.isValid ? "valid" : "invalid"}>
              {criterion.isValid ? "✔" : "✖"} {criterion.label}
            </li>
          ))}
        </ul>
        <Button
          label="Create account"
          type="submit"
          styleClass="primary-button"
          
        />
        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </form>

       {/* Add the SVG image */}
       <img
          className="bottom-left-image"
          src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1733307863/image_gnnaf1.png"
          alt="Decorative SVG"
       />
    </div>
  );
};

export default SignupPage;
