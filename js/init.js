

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

function setHeading(){
  $('#heading').text(moment().format('dddd, MMMM Do, YYYY'));

}

function addInputs(){
}

function init( jQuery ) {
  if(moment().hour() >= 18){
    nighttime = true
  }

  setColors()
  setHeading()
  addInputs()


  $(':input').bind('input propertychange', function(){
    console.log($(this).attr("id") + " = " + $(this).val());
  });
}


$( document ).ready( init );
