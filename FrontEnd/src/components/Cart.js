import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./BookUser/BookUser.css"
import BooksCart from "./BookUser/BooksCart"
const URL = "http://localhost:5000/books";

const fetchHandler = async() => {
  return await axios.get(URL).then((res)=> res.data);
};

const Cart = () => {
  //const bookName = "the";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  //Filter books based on cart selection
 const filteredBooks = books.filter((book) => book.cart === true);

 // Calculate subtotal
 const subtotal = filteredBooks.reduce((acc, book) => acc + book.price, 0);
 
 const sendRequest = async () => {
  try {
    const response = await axios.post("http://localhost:5000/checkout", {
      items: filteredBooks,
      subtotal: subtotal.toFixed(2),
    });

    // Extract the checkout URL from the response and store it in state
    const url = response.data.url;
    
    // Redirect to the Stripe Checkout page
    window.location = url;
  } catch (error) {
    console.error("Error sending request to checkout:", error);
  }
};

 const handleCheckout = () => {

  //alert(`Checkout - Subtotal: $${subtotal.toFixed(2)}`);
  sendRequest();
};

  return (
    <div>
    <ul>
        {filteredBooks.map((book,i)=> (
            <li key={i}>
              {console.log(" book details1",book.cart)}
                <BooksCart book={book}/>              
            </li>
        ))}
    </ul>
    <div>
        <p>Subtotal: Rs {subtotal.toFixed(2)}</p>
        <button onClick={handleCheckout}>Checkout</button>
    </div>
    </div>
  )
};

export default Cart;
