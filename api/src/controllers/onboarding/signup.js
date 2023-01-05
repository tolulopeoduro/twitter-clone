import { jwt, sign } from "jsonwebtoken";
import { hash, genSalt, compare } from "bcrypt";
import { ObjectID } from "bson";

const signup = async (req, res, next) => {
    const client = req.app.locals.db;

    if (req.body.email) {
        const email_exists = (await client.db("twitter-clone").collection("users").countDocuments({ email: req.body.email })) > 0;
        if (email_exists) return res.status(401).json({ message: "email already used" });
    }

    if (req.body.phone) {
        const phone_exists = (await client.db("twitter-clone").collection("users").countDocuments({ email: req.body.email })) > 0;
        if (phone_exists) {
            return res.status(401).json({ message: "phone number already used" });
        }
    }

    hash(req.body.password, 10, async (err, hash) => {
        if (err) return res.status(500).json({ message: "Something went wrong, please try again" });
        req.body.password = hash;
        const newUser = await client.db("twitter-clone").collection("users").insertOne(req.body);
        const token = await sign({ userId: newUser.insertedId }, "my-string", { expiresIn: "24h" });
        res.status(201).json({
            userId: newUser.insertedId,
            token: token,
        });
    });
};

export default signup;
