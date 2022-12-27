import { Router } from "express";
import login from "../controllers/onboarding/login";
import signup from "../controllers/onboarding/signup";

const onboarding = new Router();

onboarding.post("/login", login);
onboarding.post("/signup", signup);

export default onboarding;
