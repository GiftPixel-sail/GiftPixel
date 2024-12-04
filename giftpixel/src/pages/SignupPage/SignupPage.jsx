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
          <Input
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
          />
          <Input
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
        </div>
        <Input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="JohnDoe"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="johndoe@gmail.com"
        />
        <div className="phone-group">
          <select className="country-code">
            <option value="+234">+234</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
          <Input
            label="Phone number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9023428933"
          />
        </div>
        <div className="password-group">
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
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
    </div>
  );
};

export default SignupPage;
