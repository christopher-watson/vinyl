$("#player-score").text(0);

var vinylGame = {
  randNum: 0,
  vinylClick: 0,
  playerScore: 0,
  didWin: false,

  reset: function(){
  this.randNum = Math.floor(Math.random() * 120) + 19;
  $("#comp-score").text(this.randNum);
    console.log("randNum: " + this.randNum);
  },

  vinylClick: function(){

  },

};

$(document).ready(function(){
  vinylGame.reset();

});