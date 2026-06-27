const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/items", require("./routes/reportRoutes"));


app.use("/api/contact", require("./routes/contactRoutes"));
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("LostAndFoundPortal API is running 🚀");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});