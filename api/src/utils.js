const sha1 = require("sha1")
exports.createId = (req) => sha1(`${req?.body.userId}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getMilliseconds()}`);