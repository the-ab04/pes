import express from "express";
import dotenv from "dotenv";
import taRoutes from "./routes/taRoutes"; // Ensure this matches your actual structure

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/ta", taRoutes); // Make sure `taRoutes` is correctly imported

app.listen(5002, () => console.log("Server Running on Port 5002"));
