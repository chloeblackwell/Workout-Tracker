// Dependencies 
require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Port 
const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongo DB URL 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {

    useNewUrlParser: true,
    useFindAndModify: false
});

// Routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener 
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
})
