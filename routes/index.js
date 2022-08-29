const { Router } = require("express");
const router = Router();

//router.use("/weather", require("./weather"));
//router.use("/movies", require("./movies"));
router.use("/sample", require("./sample"))

router.use("/", (req, res) => res.status(404).send("Route not found. Maybe you meant /sample"))
module.exports = router;
