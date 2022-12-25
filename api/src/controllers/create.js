const fs = require("fs");

const create = (req, res, next) => {
    const client = req.app.locals.db;
    const { body } = req;
    const files = req.files;
    const update = () => {
        if (files) {
            const media = files.map((file) => {
                fs.mkdir("media/tweets/test", (err) => console.log(err));
                fs.writeFileSync(`media/tweets/test/${file.originalname}`, file.buffer, (err) => {
                    console.log(err);
                });
                return {
                    path: `${req.protocol}://${req.get("host")}/media/tweets/test/${file.originalname}`,
                    type: file.mimetype.split("/")[0],
                };
            });

            client
                .db("twitter-clone")
                .collection("tweets")
                .insertOne({ ...{ body }, _id: "hello", media: media, date: new Date().toISOString }, (error) => {
                    if (error) return;
                    res.status(201).json({
                        message: "tweet created",
                    });
                });
        }
    };
    update();
};

export default create;
