import "../styles/SidePromise.css";
import Input from "../components/Inputs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie to manage cookies

const SidePromise = () => {
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
    // Make sure all fields are filled in before sending the request
    if (!title || !description || !selectedPromise) {
      alert("Please fill in all fields.");
      return;
    }

    // Fetch the user ID from the cookies (assuming the cookie name is 'userId')
    const userId = Cookies.get("user"); // Adjust the cookie name if necessary

    const my_id = JSON.parse(userId)._id;

 
    


   
    
    
    if (!userId) {
      alert("User not authenticated.");
      return;
    }

    // Log the data to be sent to the backend
    const requestData = {
      promiseTitle: title,
      promiseDescription: description,
      promiseType: selectedPromise,
      id: my_id, // Add the userId to the request
    };
    console.log("Sending request data:", requestData);

    try {
      setIsSubmitting(true); // Set submitting state to true
      setErrorMessage(""); // Reset previous error message
      setSuccessMessage(""); // Reset previous success message

      // Send PUT request to update the promise
      const response = await axios.put("https://auth-zxvu.onrender.com/api/auth/update-promise", requestData);

      // Check if the response is successful
      if (response.status === 200) {
        setSuccessMessage("Promise updated successfully!");
        // Reset form after successful submission
        setTitle("");
        setDescription("");
        setSelectedPromise("");
        setTimeout(() => navigate("/promiseList"), 2000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      // Handle errors and display message
      console.error("Error updating promise:", error);
      if (error.response && error.response.data) {
        setErrorMessage(`Error: ${error.response.data.message}`);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="sidePromise-container">
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
          {/* Radio buttons */}
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
          {/* More radio buttons here... */}
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
