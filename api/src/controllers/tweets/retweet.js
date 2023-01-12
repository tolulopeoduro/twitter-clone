const retweet = (req, res, next) => {
    const client = req.app.locals.db;
    client
        .db("twitter-clone")
        .collection("tweets")
        .updateOne({_id : req.params.id}, {$push : {retweets : req.body.userId}})
        .then(() => {
        res.status(201).json({message : "done"})
    })
}

export default retweet;