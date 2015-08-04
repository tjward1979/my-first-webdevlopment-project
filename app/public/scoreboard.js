var p1CurrTotal;
var new301Game = true; 
var new501Game = false;

$('#P1-score').val(''); 
$('#P2-score').val('');

function new301() {

$('.new-301-game').click(function() {

  new301Game == true;
  new501Game == false;

  $('.new-501-game').removeClass('active');
  $(this).addClass('active');

  console.log("Button 301 Clicked");

  $('#P1-score').val('301'); 
  $('#P2-score').val('301');

  p1CurrTotal = $('#P1-score').val();
});

}

new301();

function new501() {
$('.new-501-game').click(function() {

  $('.new-301-game').removeClass('active');
  $(this).addClass('active');
  
  console.log("Button 501 Clicked");

  $('#P1-score').val('501'); 
  $('#P2-score').val('501');

  p1CurrTotal = $('#P1-score').val();
});

}

new501();
function scoreCalc() {

 
var p1CurrScore = Calc.Input.value;

  $('#calculate').click(function() {

    p1CurrScore = Calc.Input.value;
    p1CurrTotal = $('#P1-score').val();    
    console.log("Calculate Button Clicked");
    console.log(p1CurrTotal);
    console.log(p1CurrScore);

    var p1NewTotal = p1CurrTotal - p1CurrScore;

    console.log(p1NewTotal);

    $('#P1-score').val(p1NewTotal);

    Calc.Input.value = '';



  });


};

scoreCalc();

function playerStart() {

  $('#P1-new-game').click(function(){
    $('#P2-new-game').removeClass('active');
    $(this).addClass('active');

    console.log("Start Game Player 1 Button Clicked");
  });

  $('#P2-new-game').click(function() {
    $('#P1-new-game').removeClass('active');
    $(this).addClass('active');

    console.log("Start Game Player 2 Button Clicked");

  });
}

playerStart();