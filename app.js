const express = require("express");
const path = require("path");
// const cors = requires("cors");
const nodemailer = require("nodemailer");

const app = express();

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

//  Middleware
// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started... ${PORT}`));
