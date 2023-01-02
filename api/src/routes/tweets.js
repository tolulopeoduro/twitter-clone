import { Router } from "express";
import auth from "../middleware/auth";
import create from "../controllers/tweets/create";
import list from "../controllers/tweets/list";
import like_tweet from "../controllers/tweets/like_tweet";

const tweets = new Router();

const multer = require("multer");
const upload = multer();

tweets.post("/", auth, upload.array("image"), create);
tweets.get("/", list);
tweets.post("/like", auth, like_tweet);

export default tweets;
