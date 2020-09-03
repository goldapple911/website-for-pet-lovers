const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
// const mongoose = require("mongoose");
// const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Haven't created a database to connect yet 
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// CONNECTION NOT YET TESTED

// app.use(routes);

app.listen(PORT, () => { console.log(`API Server now listening on PORT ${PORT}!`) })