const express = require("express");
const router = express.Router();
const { signin, signup } = reuqire("../handlers/authentication");

router.post("/signin", singin);
router.post("/signup", signup);

module.exports = router;
