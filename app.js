const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    github: "hello",
    heroku: "how are you",
    testing: "Deployment is a success",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
