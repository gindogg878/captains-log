require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { connect, connection } = require("mongoose");
const methodOverride = require("method-override");
const Logs = require("./models/logs");

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

// Custom Middleware
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

//accessing static files from public folder like css, imgs, fonts
app.use(express.static("public"));

// //routes
// app.use("/fruits", fruitsController);

//index for log
app.get("/", async (req, res) => {
  try {
    const foundLog = await Logs.find({});
    res.render("Index", { Logs: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

//new route
app.get("/logs/new", (req, res) => {
  res.render("New");
});

//create route
app.post("/logs", async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    const newLog = await Logs.create(req.body);
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
