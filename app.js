const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
const auth = require("./routes/auth");
const keys = require("./config/keys");
require("./services/mongoose");
require("./models/User");
require("./services/passport");

app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", auth);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
