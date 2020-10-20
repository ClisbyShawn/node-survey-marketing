const passport = require("passport");
const router = require("express").Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/callback", passport.authenticate("google"));

router.get("/me", (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.send(req.user);
});

module.exports = router;
