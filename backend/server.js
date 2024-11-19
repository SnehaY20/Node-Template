const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const logger = require("./middleware/logger.js");

// Load env variables
 dotenv.config({ path: "./.env" });

// connectDB
// connectDB();

// Bring in Route files
const routes = require("./routes/sample.js");

const app = express();

// Body parser
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(logger);
}

// Mount routers (path)
app.use("/api", routes);

app.get("/", (req, res) => {
  res.status(200).send("Hello, Sneha is here");
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
