var panel = $("#game-zone");

//  Array
var questions = [{
  question: "How many Matrix movies has been Recorded?",
  answers: ["1", "2", "3", "4"],
  correctAnswer: "3"
}, {
  question: "Which is better programing Laanguage",
  answers: ["NodeJS", "Java", "C++", "Visual Basic"],
  correctAnswer: "Visual Basic"
}, {
  question: "How many tires on a Bus?",
  answers: ["6", "8", "10", "16"],
  correctAnswer: "10"
}, {
  question: "Which is the best Futboll Soccer Team?",
  answers: ["Barcelona", "Real Madrid", "PSJ", "Bayer Munich"],
  correctAnswer: "Bayer Munich"
}, {
  question: "WHat is the real name of Al pacino?",
  answers: ["Alfredo Curtis ", "Alfredo Lee", "Alfredo James", "The Lion King"],
  correctAnswer: "Alfredo James"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 90,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>90</span> Seconds</h2>");

    $("#start").remove();
    $("#end").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();
  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2 class='result'> Done! </h2>");
    panel.append("<h3 class='result'>Correct : " + this.correct + "</h3>");
    panel.append("<h3 class='result'>Incorrect : " + this.incorrect + "</h3>");
    panel.append("<h3 class='result'>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    panel.append("<button class='result' id='Again'>Play Again</button>");
    panel.append("<button class='result' id='end'>End</button>");
  },

  end: function() {
    $("#start").remove();
    $("#end").remove();
    $("#sub-wrapper").prepend("<h2> Exit sasa </h2>");

  }  
};


// CLICK EVENTS

$(document).on("click", "#start", function() {
  $("#start").hide()
  game.start();
});


$(document).on("click", "#done", function() {
  $("done").hide()
  game.done();
});

$(document).on("click", "#Again", function() {
  game.correct =0
  game.incorrect=0
  game.counter=90
  $(".result").hide()
  console.log("Again")
  game.start();
});


$(document).on("click", "#end", function() {
  //$('#wrapper').empty()
  $(".result").hide()
  $("#start").remove();
  $("#end").remove();
  $("#sub-wrapper").prepend("<h2> Bye Bye!!! </h2>");
});

