import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import { router as authRoute } from "./routes/auth.js"
import cookieSession from "cookie-session";
import passport from "passport";

dotenv.config()
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser());
app.use(cors({
    origin:process.env.CLIENT_URL,
    methods:"GET,POST,PULL, DELETE",
    credentials:true,
    'Access-Control-Allow-Origin': '*'
}));
app.use(cookieSession({
    name:"session",
    keys:process.env.cookieKey,
    maxAge:24*60*60*100
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', authRoute);

app.listen(process.env.PORT, () => {
    console.log(`🌎 Running on ${process.env.PORT}`);
})