import React from 'react'
import "../../styles/PromiseCard.css"
import { FaHeart } from "react-icons/fa";
import Button from "../../components/Button"

const PromiseCard = () => {
  return (
    <div className="promiseCard">
        <p className="welcome-message"><span id='span'>Welcome,</span>&nbsp;@Hamzah👋🏽</p>
    <FaHeart className="heart-icon" />
    <p className="promiseCard-content">
      Share a promise card with your friends and help them discover the perfect gift for you!
    </p>
    <Button label="Create your promise card" styleClass ="action-button"/>
  </div>
  
  )
}

export default PromiseCard