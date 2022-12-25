import { jwt } from "jsonwebtoken";
import { hash, genSalt, compare } from "bcrypt";
import { ObjectID } from "bson";

const signup = async (req, res, next) => {
    const client = req.app.locals.db;

    const p = await client.db("twitter-clone").collection("users").countDocuments({ email: req.body.email });
    if (p > 0) {
        return res.status(401).json({ message: "email already used" });
    }
    hash(req.body.password, 10, async (err, hash) => {
        if (err) return res.status(500).json({ message: "Something went wrong, please try again" });
        req.body.password = hash;
        const newUser = await client.db("twitter-clone").collection("users").insertOne(req.body);
        const token = await jwt.sign({ userId: newUser.insertedId }, "my-string", { expiresIn: "24h" });
        console.log(user);
        res.status(201).json({
            userId: newUser.insertedId,
            token: token,
        });
    });
};

export default signup;
