const express = require("express");
const router = express.Router();

const cv = require("opencv4nodejs");

router.get("/", (req, res, next) => {
    cv.imreadAsync("public/img/monalisa.png", (err, mat) => {
        if (err) console.log(err);
        console.log(mat);
    })
    res.json({ msg: "connection test" });
    next();
});

module.exports = router;