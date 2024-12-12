import React from 'react'
import Button from "../components/Button"
import { PiShareFill } from "react-icons/pi";
import "../../src/styles/PropsCard.css"

const PropsCard = ({title, desc}) => {
  return (

    <div>
        <div>
            <h2>{title}</h2>
            <div>
                <p>{desc}</p>
                <Button label="Share" <PiShareFill />/>
            </div>
        </div>
        <Button label="+ Add To List"/>
    </div>
  )
}

export default PropsCard