import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/postRoutes.js';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: "30mb", extended: true}));
app.use(cors());

// Set routes
app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://Travis:Travis123@interactive-diary.4eoju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message)
);
