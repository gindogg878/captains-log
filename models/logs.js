//destructuring the schema and model
const { Schema, model } = require("mongoose");

//creating a new schema, same thing as mongoose.schema
const logsSchema = new Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: Boolean,
  },
  { timestamps }
);

const Logs = model("Logs", logsSchema);
module.exports = Fruit;
