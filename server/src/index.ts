import "reflect-metadata"
import express from 'express';
import { MovieRouter, uploadRouter } from './route';


const app = express();
app.use(express.json());
app.use("/upload", express.static("public/uploads "));

app.use("/api/movie", MovieRouter)
app.use("/api/upload", uploadRouter)

app.listen(3000);