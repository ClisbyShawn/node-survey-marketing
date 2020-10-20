const express = require("express");
require("./services/passport");
const auth = require("./routes/auth");

const app = express();
app.use(express.json());
app.use("/auth", auth);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
