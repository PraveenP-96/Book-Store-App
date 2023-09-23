import React from 'react'
import cancel from "../images/cancel.png"
import {Link} from "react-router-dom"

const Cancel = () => {
  return (
    <div>
      <span>Payment has failed</span>
      <div>
        <img src={cancel} alt="" />
      </div>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
};

export default Cancel;