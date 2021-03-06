require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true});
const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose connected.");
});
connection.on("error", (err) => {
    console.log("Mongoose error: " + err);
});

require("./routes/apiRoutes")(app);

app.use(express.static(__dirname + '/client/build'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`App is running on http://localhost:${PORT}`);
});