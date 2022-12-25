const list = async (req, res, next) => {
    const client = req.app.locals.db.db("twitter-clone");

    const tweets = await client.collection("tweets").find().toArray();
    console.log(tweets);
    res.status(200).json({ data: tweets });
};

export default list;
