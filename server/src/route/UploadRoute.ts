import express from "express";
import ResponseHelper from "./ResponseHelper";
import path from "path";
import multer, { MulterError } from "multer";

const extAllowed = [".png", ".jpg", ".jpeg", ".gif", ".svg"];

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "../../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
})

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname);
    console.log(ext);
    if (extAllowed.includes(ext)) {
      return cb(null, true);
    } else {
      return cb(new Error("Invalid file type"));
    }
  }
}).single("imgfile");

const uploadRouter = express.Router();

uploadRouter.post("/", async (req, res) => {
  upload(req, res, err => {
    if (err) {
      ResponseHelper.sendError(err.message, res);
    } else {
      const url = "/upload/" + req.file?.filename
      ResponseHelper.sendData(url, res);
    }
  })
})

export { uploadRouter };