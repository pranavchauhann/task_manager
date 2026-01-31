const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Database Connection */
connectDB();

/* Routes */
app.use("/api/tasks", require("./routes/tasks"));

/* Server */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
