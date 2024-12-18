import "../styles/SidePromise.css";
import Input from "../components/Inputs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie to manage cookies

const SidePromise = ({ closeSidebar }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPromise, setSelectedPromise] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submitting status
  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages
  const [successMessage, setSuccessMessage] = useState(""); // For displaying success messages
  const navigate = useNavigate();

  // Handle changes in input fields
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  // Handle the radio button selection
  const handleRadioChange = (e) => setSelectedPromise(e.target.value);

  const handlePromise = async () => {
    if (!title || !description || !selectedPromise) {
      alert("Please fill in all fields.");
      return;
    }

    const userId = Cookies.get("user"); 
    const my_id = JSON.parse(userId)._id;

    if (!userId) {
      alert("User not authenticated.");
      return;
    }

    const requestData = {
      promiseTitle: title,
      promiseDescription: description,
      promiseType: selectedPromise,
      id: my_id, // Add the userId to the request
    };

    try {
      setIsSubmitting(true);
      setErrorMessage(""); // Reset previous error message
      setSuccessMessage(""); // Reset previous success message

      const response = await axios.put("https://auth-zxvu.onrender.com/api/auth/update-promise", requestData);

      if (response.status === 200) {
        setSuccessMessage("Promise updated successfully!");
        setTitle("");
        setDescription("");
        setSelectedPromise("");
        setTimeout(() => navigate("/promiseList"), 2000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error updating promise:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="sidePromise-container">
      <button className="close-btn" onClick={closeSidebar}>
        ✖
      </button>

      <div className="Promise-select">
        <Input
          styleClass={"input-field"}
          type={"text"}
          label={"Promise Title"}
          value={title}
          onChange={handleTitleChange}
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
        />

        <p>What best describes your promise list?</p>
      </div>

      <div className="promise-btn">
        <div className="btn-container">
          <input
            type="radio"
            id="birthday1"
            name="promise"
            className="btn-promise"
            value="Birthday 1"
            onChange={handleRadioChange}
          />
          <label htmlFor="birthday1" className="btn-promise">
            Birthday 1
          </label>
        </div>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <button onClick={handlePromise} className="submit-btn" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default SidePromise;
