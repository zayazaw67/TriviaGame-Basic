$(document).ready(function () {
    $(".triviaForm").hide()
    $(".results").hide()
    $("#start").on("click", startGame)


    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    // var timerOn = false
    var number = 5;
    var intervalId;
    var correctChoice;
    var userChoice;
    // var questionIndex;



    // var questionCounter = 0;
    var questions = [
        {
            question: "What year did World War I begin?",
            answers: [
                "1916",
                "1914",
                "1919",
                "1923",
            ],
            correct: "1914"
        },
        {
            question: "Where was John F. Kennedy assassinated?",
            answers: [
                "Texas",
                "New York",
                "Louisiana",
                "Maine",
            ],
            correct: "Texas"
        },
        {
            question: "When did Hawaii become apart of the United States?",
            answers: [
                "1979",
                "1984",
                "1989",
                "1904",
            ],
            correct: "1989"
        },
    ];


    console.log(correctChoice)
    for (var i = 0; i < questions.length; i++) {
        correctChoice = questions[i].correct;

        var newQuestions = $('<div>').addClass('triviaForm');
        newQuestions.append('<p>' + questions[i].question + '</p>');
        for (var j = 0; j < questions[i].answers.length; j++) {
            var answers = $('<p>').addClass("btn btn-info");
            answers.text(questions[i].answers[j]);
            newQuestions.append(answers);
        };
        $('.question').append(newQuestions);
        console.log(newQuestions)
    };

    function checker() {
        for (var i = 0; i < questions.length; i++) {
            correctChoice = questions[i].correct;
            if (userChoice === correctChoice) {
                correct++
            } else if ((number === 0) && (userChoice === undefined)) {
                unanswered++
            }
            else {
                incorrect++
            }
        }
    };

    function startGame() {
        $("#start").hide()
        $(".questions").show()
        $(".triviaForm").show()
        newQuestions.show()

        // displayQuestions()

        intervalId = setInterval(decrement, 1000);
        // for (var i = 0; i < questions.length; i++) {

    }
    function decrement() {
        number--;
        $("#time").html(number);
        if (number === 0) {
            $(".results").show();
            stop();
            $(".triviaForm").hide();
            checker();
            console.log(correct, incorrect, unanswered)
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    // function displayQuestions() {
    //     for (var i = 0; i < questions.length; i++) {
    //         $(".questions").appendTo("<br><hr>" + questions.question)
    //     }
    // }
    // for (i = 0; i < questions.length; i++) {
    //     $(".questions").text(questions[i].question);


    // $(".answers").text(questions[i].answers);

    // console.log(questions[i])
    // $(".questions").text(questions[i].answers[i]);

    // for (i = 0; i < answers.length; i++); {
    // }
    // }
}
)