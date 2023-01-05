import { ObjectID } from "bson";

const fs = require("fs");

const create = (req, res, next) => {
    const client = req.app.locals.db;
    const { body, files } = req;
    const id = `${body.userId}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getMilliseconds()}`;
    let media;
    if (files) {
        media = files.map((file) => {
            fs.mkdir("media/tweets/test", (err) => {
                // return res.status(500).json({ message: "Something went wrong, please try again" });
            });
            fs.writeFileSync(`media/tweets/test/${file.originalname}`, file.buffer, (err) => {
                // return res.status(500).json({ message: "Something went wrong, please try again" });
            });
            return {
                path: `${req.protocol}://${req.get("host")}/media/tweets/test/${file.originalname}`,
                type: file.mimetype.split("/")[0],
            };
        });
    }
    const data = client
        .db("twitter-clone")
        .collection("tweets")
        .insertOne({ ...{ body }, _id : id ,media: media, date: new Date().toISOString }, (error) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Something went wrong, please try again" });
            }
            if (body.reply_for) {
                client.db("twitter-clone").collection("tweets").updateOne({_id : body.reply_for}, {$push : {replies : id}})
                .then(() => {
                    return res.status(201).json({message : "Reply created"})
                })
            } else {
                res.status(201).json({
                    message: "tweet created",
                });
            }
        });
};

export default create;
