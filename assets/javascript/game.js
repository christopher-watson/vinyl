$("#player-score").text(0);
$("#win-num").text(0);
$("#loss-num").text(0);

var ninaHTML = $("#nina");
var stevieHTML = $("#stevie");
var eaglesHTML = $("#eagles");
var andyHTML = $("#andy");
var resetHTML = $("reset");

var vinylGame = {
  randNum: 0,
  vinylClick: 0,
  playerScore: 0,
  vinylNum: 0,
  didWin: false,
  didLose: false,
  vinylClear: 0,
  winHTML: 0,
  loseHTML: 0,

  newNum: function(){
    vinylGame.vinylNum = 0;
    vinylGame.vinylNum = Math.floor(Math.random() * 12) + 1;
    $("#nina").val(this.vinylNum);
    vinylGame.vinylNum = Math.floor(Math.random() * 12) + 1;
    $("#stevie").val(this.vinylNum);
    vinylGame.vinylNum = Math.floor(Math.random() * 12) + 1;
    $("#eagles").val(this.vinylNum);
    vinylGame.vinylNum = Math.floor(Math.random() * 12) + 1;
    $("#andy").val(this.vinylNum);
      // console.log("Nina: " + ninaHTML.val());
      // console.log("Stevie: " + stevieHTML.val());
      // console.log("Eagles: " + eaglesHTML.val());
      // console.log("Andy: " + andyHTML.val());
  },
  
  vinylClick: function(a){
    this.playerScore += parseInt(a.val());
    $("#player-score").text(this.playerScore);
    if(this.playerScore === this.randNum){
      this.didWin = true;
    };

    if(this.playerScore > this.randNum){
      this.didLose = true;
    };

    vinylGame.gameOver();
    console.log("W: " + vinylGame.winHTML);
    console.log("L: " + vinylGame.loseHTML);
  },
  
  
  gameOver: function(){
    if(this.didWin){
      this.winHTML++;
      $("#win-num").text(this.winHTML);
      $.alert({
        title: 'You Win',
        content: this.randNum + ' - ' + this.playerScore,
        theme: 'black',
      });
      vinylGame.vinylClear();
      vinylGame.newNum();
      vinylGame.newScore();
    };
    
    if(this.didLose){
      this.loseHTML++;
      $("#loss-num").text(this.loseHTML);
      $.alert({
        title: 'You Lose',
        content: this.randNum + ' - ' + this.playerScore,
        theme: 'black'
      });
      vinylGame.vinylClear();
      vinylGame.newNum();
      vinylGame.newScore();
    };
  },
  
  vinylClear: function(){
    vinylGame.playerScore = 0;
    $("#player-score").text(0);
    vinylGame.didWin = false;
    vinylGame.didLose = false;
  },

  newScore: function(){
  this.randNum = Math.floor(Math.random() * 120) + 19;
  $("#comp-score").text(this.randNum);
    console.log("randNum: " + this.randNum);
  },

  reset: function(){
    vinylGame.vinylClear();
    vinylGame.newNum();
    vinylGame.newScore();
    vinylGame.winHTML = 0;
    vinylGame.loseHTML = 0;
    $("#win-num").text(0);
    $("#loss-num").text(0);
  }
};

$(document).ready(function(){
  vinylGame.newScore();
  vinylGame.newNum();
  $("#nina").on("click", function(){
    vinylGame.vinylClick(ninaHTML);
  });
  $("#stevie").on("click", function(){
    vinylGame.vinylClick(stevieHTML);
  });
  $("#eagles").on("click", function(){
    vinylGame.vinylClick(eaglesHTML);
  });
  $("#andy").on("click", function(){
    vinylGame.vinylClick(andyHTML);
  });
  $("#reset").on("click", function(){
    vinylGame.reset();
  });
});