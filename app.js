const express = require("express");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");
const port = 5000

const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use('/public', express.static(path.join(__dirname, 'public')))

//middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});