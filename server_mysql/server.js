import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js";

// dotenv config
dotenv.config();
const port = process.env.PORT;

// REST OBJECT
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

/** HTTP GET REQUEST */
app.get("/", (req, res) => {
  res.send("Wenn Mark Recopelacion");
});

// API ROUTES
app.use("/api/v1", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.bgCyan);
});
