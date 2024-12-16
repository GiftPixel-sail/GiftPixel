import { useState } from "react";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar"; // Import the Sidebar component
import "../../styles/PromiseListPage.css";
import { FaShareAlt, FaPlus } from 'react-icons/fa'; // Import icons

const PromiseListPage = () => {
  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddToListClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="main-promise-list-container">
      <div className="promise-list-container">
        <div className="promise-text">
          <h2>Promise Card</h2>
          <p>No matter what you choose, the thought and love behind it mean the most to me.</p>

          <Button 
            styleClass="add2List" 
            label={<><FaPlus size={10}/> Add to list</>} 
            onClick={handleAddToListClick} 
          /> 
        </div>

        <Button 
          styleClass="share-btn" 
          label={<>Share <FaShareAlt size={20} /> </>} 
        /> 
      </div>

      {/* Conditionally render Sidebar */}
      {isSidebarOpen && <Sidebar onClose={handleCloseSidebar} />}
    </div>
  );
};

export default PromiseListPage;
