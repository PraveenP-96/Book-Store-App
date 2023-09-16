import { Button } from '@mui/material';
//import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react'
import "./BookUser.css"

const BookUser = (props) => {

    const {name,author, description, price, available, image} = props.book;

    return (
        <div className="card">
            <img src={image} alt={name}/>
            <article>Author : {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h3>Rs {price}</h3>
            <h3>Available : {String(available)}</h3>
            <Button disabled={!available} variant='contained' 
            color='secondary'
              //style={{ backgroundColor: 'black', color: 'white' }}
             LinkComponent={Link} to={`/cart`}>Add to cart</Button>
        </div>

    )
}

export default BookUser;