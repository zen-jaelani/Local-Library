require("dotenv").config();
// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = process.env.MONGODB_URI;

// Wait for database to connect, logging an error if there is a problem
async function main() {
  try {
    console.log("connecting to mongod....");
    await mongoose.connect(mongoDB);
    console.log("mongod connected!");
  } catch (error) {
    throw error;
  }
}

module.exports = main();
