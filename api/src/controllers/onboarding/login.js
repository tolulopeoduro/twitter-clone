import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

const signup = async (req, res, next) => {
    const client = req.app.locals.db;
    const data = req.body.email ? { email: req.body.email } : req.body.phone ? { phone: req.body.phone } : null;
    client
        .db("twitter-clone")
        .collection("users")
        .findOne(data)
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    message: "user does not exist",
                });
            }
            compare(req.body.password, user.password).then((valid) => {
                if (!valid) {
                    return res.status(401).json({
                        message: "incorrect login details",
                    });
                }
                const token = sign({ userId: user._id }, "my-string", { expiresIn: "24h" });
                res.status(200).json({
                    userId: user._id,
                    token: token,
                });
            });
        });
};

export default signup;
