import "../../styles/PromiseCard.css";
import { FaHeart } from "react-icons/fa";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Import js-cookie
import SidePromise from "../../components/SidePromise";

const PromiseCard = () => {
  // State to toggle the sidebar visibility
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from cookies instead of localStorage
    const userData = Cookies.get("user"); // Retrieve the user cookie
    if (userData) {
      setUser(JSON.parse(userData)); // Parse the stored JSON string into an object
    }
  }, []); // Run once when the component mounts

  const displaySideBar = () => {
    setSidebarVisible(!sidebarVisible); // Toggle the visibility
  };

  const closeSidebar = () => {
    setSidebarVisible(false); // Close the sidebar
  };

  return (
    <div className="promiseCard">
      {/* Check if user exists before rendering */}
      {user ? (
        <p className="welcome-message">
          <span id="span">Welcome,</span>&nbsp; {user.username}👋🏽
        </p>
      ) : (
        <p>Loading...</p>
      )}

      <FaHeart className="heart-icon" />
      <p className="promiseCard-content">
        Share a promise card with your friends and help them discover the perfect gift for you!
      </p>
      <Button
        label="Create your promise card"
        styleClass="action-button"
        onClick={displaySideBar}
      />

      {/* Conditionally render the sidebar */}
      {sidebarVisible && <SidePromise closeSidebar={closeSidebar} />}
    </div>
  );
};

export default PromiseCard;
