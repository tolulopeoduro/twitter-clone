const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "my-string");
    if (decoded.userId !== req.headers.user_id) {
        res.status(401).json({ message: "Invalid token" });
    } else {
        next();
    }
};

export default auth;
