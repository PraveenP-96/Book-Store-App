import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Cart from "./components/Cart";
import BooksAdmin from "./components/BookAdmin/BooksAdmin";
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
    <React.Fragment >
      <header>
        <Header/>
      </header>
      
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/add" element={<AddBook/>} exact />
        <Route path="/books" element={<BooksAdmin/>} exact />
        <Route path="/cart" element={<Cart/>} exact />
        <Route path="/books/:id" element={<UpdateBook/>} exact />
      </Routes>
    </main>
    </React.Fragment>
  );
}

export default App;
