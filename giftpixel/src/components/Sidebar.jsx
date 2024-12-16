import { useState, useEffect } from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ onClose }) => {
  const [requestType, setRequestType] = useState(""); // cash or gift
  const [selectedCurrency, setSelectedCurrency] = useState(""); // selected country and currency
  const [cashAmount, setCashAmount] = useState(""); // amount if cash is selected
  const [giftUrl, setGiftUrl] = useState(""); // URL if gift is selected
  const [currencyOptions, setCurrencyOptions] = useState([]); // Store currency data
  const [imageError, setImageError] = useState(false); // To handle image errors
  const [urlError, setUrlError] = useState(""); // To store URL validation error message

  // Fetch country and currency data from REST Countries API
  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        
        // Extract country and currency details
        const countriesWithCurrency = data.map(country => {
          const currencies = country.currencies ? Object.values(country.currencies) : [];
          return {
            country: country.name.common,
            currency: currencies.length > 0 ? currencies[0].code : "",
            symbol: currencies.length > 0 ? currencies[0].symbol : "",
          };
        });
        
        setCurrencyOptions(countriesWithCurrency);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData();
  }, []); // Empty dependency array means this will run only once on component mount

  const handleRequestTypeChange = (e) => {
    setRequestType(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleCashAmountChange = (e) => {
    setCashAmount(e.target.value);
  };

  const handleGiftUrlChange = (e) => {
    const url = e.target.value;
    setGiftUrl(url);
    setImageError(false); // Reset image error on URL change
    validateGiftUrl(url); // Validate gift URL
  };

  // Function to validate and show image
  const isValidImageUrl = (url) => {
    return /\.(jpeg|jpg|gif|png|webp)$/.test(url);
  };

  const validateGiftUrl = (url) => {
    // Check if the URL is a valid URL
    const regex = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i;
    if (url && regex.test(url)) {
      setUrlError(""); // Clear error if valid URL
    } else if (url) {
      setUrlError("Invalid URL. Please enter a valid URL."); // Set error if invalid URL
    } else {
      setUrlError(""); // Clear error if URL field is empty
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h3>What are you requesting for?</h3>
        
        <label htmlFor="request-type">Type of Promise:</label>
        <select 
          id="request-type" 
          value={requestType} 
          onChange={handleRequestTypeChange}
        >
          <option value="">Select</option>
          <option value="cash">Cash</option>
          <option value="gift">Gift Item</option>
        </select>

        {/* Cash amount dropdown */}
        {requestType === "cash" && (
          <div>
            <label htmlFor="currency">Select Country & Currency:</label>
            <select 
              id="currency" 
              value={selectedCurrency} 
              onChange={handleCurrencyChange}
            >
              <option value="">Select Currency</option>
              {currencyOptions.map((option, index) => (
                <option key={index} value={option.currency}>
                  {option.country} ({option.symbol} {option.currency})
                </option>
              ))}
            </select>

            {selectedCurrency && (
              <div>
                <label htmlFor="cash-amount">Amount ({selectedCurrency}):</label>
                <input 
                  id="cash-amount" 
                  type="number" 
                  value={cashAmount} 
                  onChange={handleCashAmountChange}
                  placeholder={`Enter amount in ${selectedCurrency}`}
                />
              </div>
            )}
          </div>
        )}

        {/* Gift URL input */}
        {requestType === "gift" && (
          <div>
            <label htmlFor="gift-url">URL:</label>
            <input 
              id="gift-url" 
              type="url" 
              value={giftUrl} 
              onChange={handleGiftUrlChange} 
              placeholder="Enter gift item URL" 
            />
            {/* Display error message for invalid URL */}
            {urlError && <p style={{ color: "red" }}>{urlError}</p>}
          </div>
        )}

        {/* Display image if gift URL is valid */}
        {requestType === "gift" && giftUrl && isValidImageUrl(giftUrl) && (
          <div className="image-preview">
            <img 
              src={giftUrl} 
              alt="Gift Item" 
              onError={handleImageError} 
              style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }} 
            />
            {imageError && <p style={{ color: "red" }}>Failed to load image. Please check the URL.</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
