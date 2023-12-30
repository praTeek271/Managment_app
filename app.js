require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static files
app.use(express.static("public"));

//teemplating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//home route
app.get("/", (req, res) => {
  res.send("hello world , hiiii");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
