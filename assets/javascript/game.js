$("#player-score").text(0);
var ninaHTML = $("#nina")
var stevieHTML = $("#stevie")
var eaglesHTML = $("#eagles")
var andyHTML = $("#andy")


var vinylGame = {
  randNum: 0,
  vinylClick: 0,
  playerScore: 0,
  vinylNum: 0,
  didWin: false,
  vinylClear: null,

  reset: function(){
  this.randNum = Math.floor(Math.random() * 120) + 19;
  $("#comp-score").text(this.randNum);
    console.log("randNum: " + this.randNum);
  },

  vinylNum: function(){
    this.vinylNum = Math.floor(Math.random() * 12) + 1;
    $("#nina").val(this.vinylNum);
    this.vinylNum = Math.floor(Math.random() * 12) + 1;
    $("#stevie").val(this.vinylNum);
    this.vinylNum = Math.floor(Math.random() * 12) + 1;
    $("#eagles").val(this.vinylNum);
    this.vinylNum = Math.floor(Math.random() * 12) + 1;
    $("#andy").val(this.vinylNum);
      console.log("Nina: " + ninaHTML.val());
      console.log("Stevie: " + stevieHTML.val());
      console.log("Eagles: " + eaglesHTML.val());
      console.log("Andy: " + andyHTML.val());
  },

  vinylClick: function(){

  },

  vinylClear: function(){

  },

};

$(document).ready(function(){
  vinylGame.reset();
  vinylGame.vinylNum();

});