import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar"; // Sidebar component for adding new promises
import "../../styles/PromiseListPage.css";
import { FaShareAlt, FaPlus } from 'react-icons/fa'; // Icons for share and add actions
import Cookies from "js-cookie";
import axios from "axios";

const PromiseListPage = () => {
  // Setting up state to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [promises, setPromises] = useState([]); // Store promises fetched from the backend

  const handleAddToListClick = () => {
    setIsSidebarOpen(true); // Opens the sidebar when adding a new promise
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false); // Closes the sidebar
  };

  const userId = Cookies.get("user"); // Retrieving the user ID from cookies
  const my_id = JSON.parse(userId)._id; // Parsing the user ID and extracting the actual ID

  // Fetch promises from the API on initial component load
  useEffect(() => {
    axios.get(`https://auth-zxvu.onrender.com/api/auth/user/${my_id}/promises`)
      .then((response) => {
        // Log the fetched promises data for debugging
        console.log("Fetched data:", response.data);

        // Extracting titles and descriptions from the response
        const { titles, descriptions } = response.data.promises;
        console.log(titles[0].title); // Checking the first title fetched for debugging

        // Combine titles and descriptions into a new array of promise objects
        const promisesArray = titles.map((title, index) => ({
          title: titles[index].title,
          description: descriptions[index].description,
          timestamp: titles[index].timestamp  // Adjusting for actual timestamps if necessary
        }));

        setPromises(promisesArray); // Update the state with the fetched promises
      })
      .catch((error) => {
        console.error("Error fetching promises:", error); // Handling errors if the API call fails
      });
  }, [my_id]); // Re-run effect when `my_id` changes

  return (
    <div>
      {/* Render promise cards */}
      <div className="promise-cards-container">
        {promises.length > 0 ? (
          promises.map((promise, index) => (
            <div key={index} className="promise-card">
              <p className="timestamp">{new Date(promise.timestamp).toLocaleString()}</p>
              <h3>{promise.title}</h3>  
            </div>
          ))
        ) : (
          <p>No promises to display</p> // Message shown when there are no promises
        )}
      </div>

      {/* Conditionally render Sidebar based on state */}
      {isSidebarOpen && <Sidebar onClose={handleCloseSidebar} />}
    </div>
  );
};

export default PromiseListPage;
