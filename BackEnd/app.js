const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books",router) //localhost:5000/books

mongoose.connect(
    "mongodb+srv://admin:tkJCg07ohOXFzRhX@cluster0.xvkycsb.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected to DB"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err))

//mangoDb pwd : tkJCg07ohOXFzRhXy
