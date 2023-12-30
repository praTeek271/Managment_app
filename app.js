require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const connectDB = require("./server/config/db");

// connect to database
connectDB();

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

//routes

app.use("/", require("./server/routes/customer"));


// _________________________________________________________________________________________
  // //home route
  // app.get("/", (req, res) => {
  //   // res.send("hello world , hiiii");
  //   const data= {
  //     title: "Home Page",
  //     desc: "This is home page of my website",
  //     name: "Lusifer",
  //   }
  //   res.render("home",data);
  // });
  // //home route
  // app.get("/books", (req, res) => {
  //   // res.send("hello world , hiiii");
  //   const data= {
  //     title: "Home Page",
  //     desc: "This is home page of my website",
  //   }
  //   res.render("books",data);
  // });

  // // coustomer route
  // app.get("/customer", (req, res) => {
  //   res.render("customer");
  // });
// ___________________________________________________________________________________________


// 404 page
app.use((req, res) => {

  res.status(404).render("404", { url: req.url.split("/")[1] });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
