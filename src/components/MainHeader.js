const Deact = require("../libs/deact");

async function MainHeader() {
  return Deact.create(
    "header",
    { class: `header` },
    "Welcome to Boardgame Bliss"
  );
}
module.exports = MainHeader;
