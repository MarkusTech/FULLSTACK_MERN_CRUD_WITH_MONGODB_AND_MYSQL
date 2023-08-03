import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./database/conn.js";
import User from "./models/User.js";
import userRoutes from "./routes/userRoutes.js";

// dotenv config
dotenv.config();
const port = process.env.PORT;

const app = express();

// middewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

connectDB();

/** HTTP GET METHOD */
app.get("/", (req, res) => {
  res.send("Wenn Mark Recopelacion");
});

/** API ROUTES */
app.use("/api/v1", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
