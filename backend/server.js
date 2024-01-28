import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 7000;
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Mern auth server is running"));

app.listen(port, () => console.log(`server running on port ${port}`));