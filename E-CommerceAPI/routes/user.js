const router = require("express").Router();

router.get("/usertest", (req,res) => {
    res.send("User test is successful");
});

router.post("/userposttest", (req,res) => {
    const username = req.body.username;
    res.send("your unsername is: " + username);
    console.log(username);
});

module.exports = router;