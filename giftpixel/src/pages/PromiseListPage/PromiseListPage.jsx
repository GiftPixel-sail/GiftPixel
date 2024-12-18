import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar"; // Import the Sidebar component
import "../../styles/PromiseListPage.css";
import { FaShareAlt, FaPlus } from 'react-icons/fa'; // Import icons
import Cookies from "js-cookie";
import axios from "axios";

const PromiseListPage = () => {
  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [promises, setPromises] = useState([]); // State to store promises

  const handleAddToListClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const userId = Cookies.get("user"); // Get the user ID from the cookie
  const my_id = JSON.parse(userId)._id;

  // Fetch promises when the component mounts
  useEffect(() => {
    axios.get(`https://auth-zxvu.onrender.com/api/auth/user/${my_id}/promises`)
      .then((response) => {
        // Log the fetched data
        console.log("Fetched data:", response.data);

        // Assuming promises object contains 'titles' and 'descriptions' arrays
        const { titles, descriptions} = response.data.promises;
        console.log(titles[0].title);
        

        // Combine titles and descriptions into a single array of promise objects
        const promisesArray = titles.map((title, index) => ({
          title: titles[index].title,
          description: descriptions[index].description,
          timestamp:titles[index].timestamp  // You may want to adjust this for actual timestamps
        }));

        setPromises(promisesArray); // Set promises state with the combined array
      })
      .catch((error) => {
        console.error("Error fetching promises:", error);
      });
  }, [my_id]); // Dependency array ensures this runs when `my_id` changes

  return (
    <div>

         {/* Render the promise cards */}
         <div className="promise-cards-container">
  {promises.length > 0 ? (
    promises.map((promise, index) => (
      <div key={index} className="promise-card">
        <p className="timestamp">{new Date(promise.timestamp).toLocaleString()}</p>
        <h3>{promise.title}</h3>  
      </div>
    ))
  ) : (
    <p>No promises to display</p>
  )}
</div>

       

             

        

   

      {/* Conditionally render Sidebar */}
      {isSidebarOpen && <Sidebar onClose={handleCloseSidebar} />}

    
    </div>
  );
};

export default PromiseListPage;
