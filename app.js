import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { notFoundHandler, errorHandler } from './middlewares/errorHandler.js'
import loginRouter from './routes/loginRouter.js';

const app = express();

// implement .env file
dotenv.config();

// connect database
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err))

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');

//set static folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//404 not found handler
app.use(notFoundHandler);

// error middleware
app.use(errorHandler);

//routes
app.use('/login', loginRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`);
})