import express from 'express'
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import connectDB from './db/connectDb.js';
import userRoutes from './routes/userRoutes.js'
import http from 'http'
import cors from 'cors'
import path from 'path'

dotenv.config();
connectDB();
const app = express();
const server = http.createServer(app)
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({
    origin: "*", // Frontend URL
    credentials: true, // Allow sending cookies
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow headers
}));

app.use(express.json({limit:"50mb"})); //To parse JSON data in the req.body
app.use(express.urlencoded({extended: true})) //To parse from data in the req.body
app.use(cookieParser());

app.use('/api/user', userRoutes)

app.use(express.static(path.resolve(__dirname, "frontend", "dist")));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`))