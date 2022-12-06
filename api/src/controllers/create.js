const create = (req, res, next) => {
    const client = req.app.locals.db;
    const { body } = req;

    client
        .db("twitter-clone")
        .collection("tweets")
        .insertOne(body, (error) => {
            if (error) return;
            res.status(201).json({
                message: "tweet created",
            });
        });
};

export default create;
