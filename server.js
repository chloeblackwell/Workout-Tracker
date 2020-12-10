const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongo DB URL 
const PWD = "";
mongoose.connect(process.env.MONGODB_URI || ``, {
    useNewUrlParser: true,
    useFindAndModify: false
});


require("./routes/apiRoutes")(app);
require("./require/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
})
