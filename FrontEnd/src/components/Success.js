import React from 'react'
import success from "../images/success.png"
import {Link} from "react-router-dom"

const Success = () => {

  return (
    <div>
      <span>Payment successful</span>
      <span>Your order is in our system</span>
      <div>
        <img src={success} alt="" />
      </div>
      <div>
        <Link to="/">
          Back to Home Page
        </Link>
      </div>
    </div>
  )
}

export default Success;
