import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
dotenv.config()
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser());

app.listen(process.env.PORT, () => {
    console.log(`🌎 Running on ${process.env.PORT}`);
})