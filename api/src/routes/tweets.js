import { Router } from "express";
import create from "../controllers/create";

const tweets = new Router();

tweets.post("/", create);

export default tweets;
