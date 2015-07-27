

var dayBGColor = "#fff"
var dayColor = "black"

var nightBGColor = "#222"
var nightColor = "white"

var nighttime = false

var dayQuestions = ["I am grateful for", "What would make today great?", "Daily affirmations. I am..."]
var nightQuestions = ["3 Amazing things that happened today...", "How could I have made today better?"]

var defaultQuote = '"If you are patient in one moment of anger you will escape one hundred days of sorrow." ~Chinese Proverb'



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

function setQuote(){
  var numQuotes = 50 // Number of total Quotes available
  var today = moment().format("l");


  // local storage not set, first time visit
  if(localStorage['lastVisit'] == undefined || localStorage['todaysQuote'] == undefined){
    console.log("Oh it's your first time? Welcome to 5 Minute Journal!");
    localStorage['todaysQuote'] = 0
    localStorage['lastVisit'] = today
  }

  var todaysQuote = localStorage['todaysQuote']
  var lastVisit = localStorage['lastVisit']

  if(lastVisit != today){
    console.log('new Day, new Quote, have a great one!');

    todaysQuote++
    if(todaysQuote > numQuotes){
      todaysQuote = 0
    }

    localStorage['todaysQuote'] = todaysQuote
    localStorage['lastVisit'] = today
  }


  $.get('wisdom.txt', function(data) {
   var lines = data.split("\n");
   $('#quote').text(lines[todaysQuote])
  });
}

function init( jQuery ) {
  if(moment().hour() >= 18){
    nighttime = true
  }

  setColors()
  setSymbol()
  setHeading()
  addInputs()
  setQuote()


  $(':input').bind('input propertychange', function(){
    console.log($(this).attr("id") + " = " + $(this).val());
  });
}


$( document ).ready( init );
