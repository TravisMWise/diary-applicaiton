import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import postRoutes from './routes/postRoutes.js';

const app = express();
dotenv.config();
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: "30mb", extended: true}));
app.use(cors());

// Set routes
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Diary Application')
})
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message)
);
