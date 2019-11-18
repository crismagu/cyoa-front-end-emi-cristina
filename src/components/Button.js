const Deact = require("../libs/deact");
const BoardGameCard = require("./BoardGameCard");
const BoardGamePage = require("./BoardGamePage");

async function Button() {
  async function renderBoardGame() {
    document.querySelector(".main-content .container").innerHTML = "";
    Deact.render(
      await BoardGamePage(),
      document.querySelector(".main-content .container")
    );
    Http.getRequest("http://localhost:3000/boardgames", function(response)
       const { boardgames} = response; 
        boardgames.forEach(function(boardgames) {
        Deact.render(
          BoardGameCard(boardgames),
          document.querySelector(".boardgame-card")
        )
      });
    };
    return Button(
    {
      class: "boardgames-button",
      onclick: await renderBoardGame,
      style: `border-color: #eee; color: #eee`
    },
    "BoardGames"
  )
  };


// const Button = function(content) {
//   return Deact.create("button", { class: "button" }, content);
// };

module.exports = Button;
