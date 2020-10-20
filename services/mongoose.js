const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/survey", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log("Could not connect to MongoDB...", error));
