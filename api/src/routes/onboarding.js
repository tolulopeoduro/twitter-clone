import { Router } from "express";
import signup from "../controllers/onboarding/signup";

const onboarding = new Router();

onboarding.post("/login", (req, res, next) => {});
onboarding.post("/signup", signup);

export default onboarding;
