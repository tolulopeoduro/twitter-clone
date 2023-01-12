import { ObjectID } from "bson";

const like_tweet = (req, res, next) => {
    const client = req.app.locals.db;
    client
        .db("twitter-clone")
        .collection("tweets")
        .updateOne({ _id: ObjectID(req.params.id) }, { $push: { likes: req.body.userId } })
        .then(() => {
            return res.status(200).json({
                status: "successful",
            });
        });
};

export default like_tweet;
