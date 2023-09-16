import React, { useState } from 'react'
import { Input } from '@mui/material';
import logo1 from "../images/4.jpeg";
import './Home.css'
import BooksUser from "./BookUser/BooksUser";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    //<div>Welcome to Book Store App</div>
      <main >
      <div className="container">
        <img
          src={logo1}
          alt="Background"
          className="background-image"
        />
        <Input
          className="input-overlay"
          placeholder="Which book are you looking for?"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          inputProps={{ 'aria-label': 'description' }}
          style={{ backgroundColor: 'white', border: '1px solid #ccc' }}
        />
      </div>
        <BooksUser bookname={searchTerm}/>
      </main>
     
  );
};

export default Home;
