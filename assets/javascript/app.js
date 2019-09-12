$(".questions").hide()
$(".results").hide()
$("#start").on("click", startGame)

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerOn = false
var number = 3;
var intervalId;
var questions = [
    {
        question: "What year did World War I begin?",
        answers: {
            a: "1916",
            b: "1914",
            c: "1919",
            d: "1923",
        },
        correctAnwer: "b"
    },
    {
        question: "Where was John F. Kennedy assassinated?",
        answers: {
            a: "Texas",
            b: "New York",
            c: "Louisiana",
            d: "Maine",
        },
        correctAnwer: "a"
    },
    {
        question: "When did Hawaii become apart of the United States?",
        answers: {
            a: "1979",
            b: "1984",
            c: "1989",
            d: "1904",
        },
        correctAnwer: "c"
    },
]
function startGame() 
{
    $("#start").hide()
    $(".questions").show()
    intervalId = setInterval(decrement, 1000);
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