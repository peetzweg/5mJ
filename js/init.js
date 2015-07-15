

var dayBGColor = "#fff"
var dayColor = "black"

var nightBGColor = "#222"
var nightColor = "white"

var nighttime = false

var dayQuestions = ["I am grateful for", "What would make today great?", "Daily affirmations. I am..."]
var nightQuestions = ["3 Amazing things that happened today...", "How could I have made today better?"]


function setColors(){
  var bgColor
  var textColor
  if(nighttime){
    bgColor = nightBGColor
    textColor = nightColor
  } else {
    bgColor = dayBGColor
    textColor = dayColor
  }

  $('body').css( "background-color", bgColor );
  $('body').css( "color", textColor );
}

function setSymbol(){
  var symbolString = "fa fa-2x"

  if(nighttime){
    symbolString+= " right fa-moon-o"
  } else {
    symbolString+= " left fa-sun-o"
  }

  $('#symbol').addClass(symbolString);
}

function setHeading(){
  $('#heading').text(moment().format('dddd, MMMM Do, YYYY'));
}

function addInputs(){
  var questions = dayQuestions
  if(nighttime){
    questions = nightQuestions
  }

  for(var i=0; i< questions.length; i++){
    $(".input-field").append('<h6 class="center question">'+questions[i]+'</h6>')

    for(var j=0; j<3; j++){
      $(".input-field").append('<input placeholder="'+(j+1)+'." type="text">');
    }
  }
}

function init( jQuery ) {
  if(moment().hour() >= 18){
    nighttime = true
  }
  nighttime = false
  setColors()
  setSymbol()
  setHeading()
  addInputs()


  $(':input').bind('input propertychange', function(){
    console.log($(this).attr("id") + " = " + $(this).val());
  });
}


$( document ).ready( init );
