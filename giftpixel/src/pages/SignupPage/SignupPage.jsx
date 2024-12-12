// React Component: SignupPage
import { useState } from "react";
import "../../styles/SignupPage.css"; // Importing styles
import Input from "../../components/Inputs"; // Custom Input Component
import Button from "../../components/Button"; // Custom Button Component
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for password visibility toggle

const SignupPage = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Password validation criteria
  const passwordCriteria = [
    { label: "At least 8 characters", isValid: formData.password.length >= 8 },
    { label: "At least one uppercase", isValid: /[A-Z]/.test(formData.password) },
    { label: "At least one number", isValid: /\d/.test(formData.password) },
    { label: "At least one special character", isValid: /[!@#$%^&*]/.test(formData.password) },
  ];

  // Validate the entire form
  const isFormValid = () => {
    const isPasswordValid = passwordCriteria.every((criterion) => criterion.isValid);
    return (
      formData.firstName &&
      formData.lastName &&
      formData.username &&
      formData.email &&
      formData.phone &&
      isPasswordValid
    );
  };

  return (
    <div className="signup-page">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to GiftPixel</h1>
        <p>Share Meaningful Promises With Your Loved Ones</p>
      </div>

      {/* Signup Form */}
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        {/* First and Last Name Inputs */}
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

        {/* Username Input */}
        <Input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="e.g JohnDoe"
        />

        {/* Email Input */}
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g johndoe@gmail.com"
        />

        {/* Phone Number Input */}
        <div className="phone-group">
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

        {/* Password Input with Visibility Toggle */}
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
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Password Validation Messages */}
        <ul className="validation-list">
          {passwordCriteria.map((criterion, index) => (
            <li key={index} className={criterion.isValid ? "valid" : "invalid"}>
              {criterion.isValid ? "✔" : "✖"} {criterion.label}
            </li>
          ))}
        </ul>

        {/* Submit Button */}
        <Button
          label="Create account"
          type="submit"
          styleClass={`primary-button ${isFormValid() ? "enabled" : "disabled"}`}
          disabled={!isFormValid()}
        />

        {/* Social Media Sign-Up Options */}
        <div className="Or-signUp-with-google">
          <div></div>
          <p>OR Sign up with</p>
          <div></div>
        </div>
        <div className="social-icon-signUp-page">
          <img
            src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1733753205/Frame_30_1_lt8drl.png"
            alt="Social Logo 1"
            className="social-logo"
          />
          <img
            src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1733752348/Frame_32_wazt01.png"
            alt="Social Logo 2"
            className="social-logo"
          />
          <img
            src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1733752330/Frame_34_wqavhq.png"
            alt="Social Logo 3"
            className="social-logo"
          />
        </div>

        {/* Sign-In Link */}
        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </form>

      {/* Decorative SVG Image */}
      <img
        className="bottom-left-image"
        src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1733307863/image_gnnaf1.png"
        alt="Decorative SVG"
      />
    </div>
  );
};

export default SignupPage;
