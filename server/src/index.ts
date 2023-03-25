import "reflect-metadata"
import express from 'express';
import { MovieRouter } from './route';

const app = express();

app.use("/api/movie", MovieRouter)
app.listen(3000);