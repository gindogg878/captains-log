require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { connect, connection } = require("mongoose");
const methodOverride = require("method-override");
const Logs = require("./models/logs");
const logController = require("./controller/logController");

//Database connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.once("open", () => {
  console.log("connected to mongo");
});

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);

// This line tells the render method the default file extension to look for.
app.set("view engine", "jsx");

// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set("views", "./views");

// Middleware
app.use(express.urlencoded({ extended: false }));
//this enables the req.body in post routes

// Custom Middleware
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

//accessing static files from public folder like css, imgs, fonts
app.use(express.static("public"));

//routes
app.use("/logs", logController);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
