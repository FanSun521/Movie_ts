import express from "express";
import { MovieService } from "../service/MovieService";
import ResponseHelper from "./ResponseHelper";
const MovieRouter = express.Router();

MovieRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await MovieService.findById(id)
    ResponseHelper.sendData(data, res);
  } catch {
    ResponseHelper.sendData(null, res);
  }
});

MovieRouter.post("/", (req, res) => {
  res.send("post");
});

MovieRouter.put("/", (req, res) => {
  res.send("put");
});

MovieRouter.delete("/", (req, res) => {
  res.send("delete");
});

export { MovieRouter };