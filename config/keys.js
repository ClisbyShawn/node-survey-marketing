if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  //in development return the dev keys
  module.exports = require("./dev");
}
