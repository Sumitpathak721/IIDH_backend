import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
// configure env
dotenv.config();
const app = express();

// database config
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/user", authRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// Port
const PORT = process.env.PORT || 5000;

// run listen
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});