import bodyParser from "body-parser";
import express from "express";
import { MongoClient } from "mongodb";
import onboarding from "./src/routes/onboarding";
import tweets from "./src/routes/tweets";
const fs = require("fs");

const app = express();

app.use("/media", express.static("media"));

const port = process.env.PORT || 4000;

app.use(bodyParser.json());

const connectionString = `mongodb+srv://Tolulope:Tolulopeoduro2002@cluster0.stx8m0n.mongodb.net/?retryWrites=true&w=majority`;

MongoClient.connect(connectionString, (err, client) => {
    if (err) {
    }
    app.locals.db = client;
    app.listen(port);

    console.log("connected");
});

app.use("/tweets", tweets);
app.use("/onboarding", onboarding);
