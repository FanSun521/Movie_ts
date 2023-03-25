"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const route_1 = require("./route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/upload", express_1.default.static("public/uploads "));
app.use("/api/movie", route_1.MovieRouter);
app.use("/api/upload", route_1.uploadRouter);
app.listen(3000);
