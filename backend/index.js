import express from 'express'
import cors from 'cors'
import connectDb from "./db/index.js";


connectDb();
const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.listen(PORT, () => {
    console.log("Backend is up and running on port 3000")
})