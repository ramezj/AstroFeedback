import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import { router as authRoute } from "./routes/auth.js"
dotenv.config()
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser());

// Routes
app.use('/', authRoute);

app.listen(process.env.PORT, () => {
    console.log(`🌎 Running on ${process.env.PORT}`);
})