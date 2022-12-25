import { Router } from "express";
import create from "../controllers/create";
import list from "../controllers/list";

const tweets = new Router();

const multer = require("multer");
const upload = multer();

tweets.post("/", upload.array("image"), create);
tweets.get("/", list);

export default tweets;
