$(".questions").hide()
$(".results").hide()
$("#start").on("click", startGame)

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerOn = false
var number = 120;
var intervalId;
var userAnswer;

// var questionCounter = 0;
var questions = ["hello", "test", "bye", "hi"
    // {
    //     question: "What year did World War I begin?",
    //     answers: [
    //         "1916",
    //         "1914",
    //         "1919",
    //         "1923",
    //     ],
    //     correctAnwer: "1914"
    // },
    // {
    //     question: "Where was John F. Kennedy assassinated?",
    //     answers: [
    //         "Texas",
    //         "New York",
    //         "Louisiana",
    //         "Maine",
    //     ],
    //     correctAnwer: "Texas"
    // },
    // {
    //     question: "When did Hawaii become apart of the United States?",
    //     answers: [
    //         "1979",
    //         "1984",
    //         "1989",
    //         "1904",
    //     ],
    //     correctAnwer: "1989"
    // },
]



function startGame() {
    $("#start").hide()
    $(".questions").show()
    intervalId = setInterval(decrement, 1000);
    // if (userAnswer === correctAnswer) {
    //     correct++
    // } else if ((number === 0) && (userAnswer === undefined)) {
    //      unanswered ++ per question unanswered
    // }
    // else {
    //     incorrect++
    // } 
}
function decrement() {
    number--;
    $("#time").html(number)
    if (number === 0) {
        $(".results").show()
        stop()
        $(".questions").hide()
    }
}

function stop() {
    clearInterval(intervalId);
}

function displayQuestions() {
    for (var i = 0; i < questions.length; i++) {
        $(".questions").appendTo("<br><hr>" + questions)
    }
}

$(".questions").text(questions) 