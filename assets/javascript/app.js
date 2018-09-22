$(document).ready(function () {

    //global variables
    var number = 90;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var intervalId;

    //function to begin the timer
    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    //function to hide screens on opening
    $(window).on("load", hide);

    //on click function to start game
    $("#start-button").on("click", function () {
        $("#welcome").hide();
        show();
        run();
    });

    $("#submit-button").on("click", function () {
        $(".start-screen").hide();
        hide();
        stats();
        stop();

        console.log(this)
    });

    $("#play-again-button").on("click", function () {
        playAgain();

    });
    //create the elements for the stats page now that there are numbers to be filled in (hence, the dynamic element creation)  This will be a function that creates elements

    function stats() {
        //create a heading / title with results
        var gameOver = $("<h2>").html("YOUR SCORE");

        // Display The statistics
        var correctDisplay = $("<div id='correct'>").html("Correct Answers: " + correct);
        var incorrectDisplay = $("<div id='incorrect'>").html("Incorrect Answers: " + incorrect);
        var unansweredDisplay = $("<div id='unanswered'>").html("Unanswered: " + unanswered[0]);
        //creating a column/place for the results display to go
        var resultDisplay = $("<div class='results' id='results'>");
        $("#results").show();
        $(".results").show();
        $("#play-again-button").show();




        //appending the new "how well do you know" heading to the html
        resultDisplay.append(gameOver);
        //appending the results to the DOM
        resultDisplay.append(correctDisplay);
        resultDisplay.append(incorrectDisplay);
        resultDisplay.append(unansweredDisplay);
        //This creates a row after the 5th existing row in the HTML and displays all of the updated scores
        $(".row:nth(4)").append(resultDisplay);
    }
    function decrement() {
        //decrease the timer by one second
        number--;

        //display the time in html dynamically
        $("#timer").html(" " + number + " seconds");

        //display the time when there is one second remaining
        if (number === 1) {
            $("#timer").html(" " + number + " second");
        }
        //then when it reaches zero seconds left, stop game
        else if (number === 0) {
            $("#welcome").hide();
            hide();
            stats();
            stop();
        }
    }

    //function to stop the timer and clear everything out
    function stop() {
        clearInterval(intervalId);
    }

    function playAgain() {
        location.reload();
        // $("#play-again-button").hide();
        // $("#results").hide();
        // $(".results").hide();
        // $(".start-screen").show();
        // $("#welcome").show();

    }

    //functions to hide various screens
    function hide() {
        $(".question-screen").hide();
        $("#time").hide();
        $("#submit-button").hide();
        $("#play-again-button").hide();
        $("#results").show();
    }
    //function to show the appropriate screens
    function show() {
        $(".question-screen").show();
        $("#time").show();
        $("#submit-button").show();
    }

    //retrieve the tallies of correct vs incorrect with an on change function
    $("input[type=radio]").on("change", function () {
        correct = $("input[value=correct]:checked").length;
        incorrect = $("input[value=incorrect]:checked").length;
        unanswered = $(11 - (correct + incorrect));

        console.log(unanswered)
    });


});















































//     $("#question-screen").hide(),
//     $("#game-over-screen").hide(),
//     $("#start-screen").show()
// });
// var game = {
//     questions = [{

//     question: "In what state does Stranger Things take place?",
//     options: ["Kansas", "Indiana", "Nebraska", "Illinois"],
//     name: "state",
//     answer: 2,
//     divClass: ".state"
// },
// {   question: "Name the game that the boys are always playing",
//     options: ["Legend of Zelda", "Wizards & Warlocks", "Dungeons & Dragons", "Super Mario Bros"],
//     name: "game",
//     answer: 3,
//     divClass: ".game"
// },
// {   question: "What is the name of the female character with superpowers?",
//     options: ["Nancy", "Barb", "Seven", "Eleven"],
//     name: "female",
//     answer: 4,
//     divClass: ".female"
// },
// {   question: "Which of these Sci-Fi/Fantasy movies does 'Stranger Things' pull from?",
//     options: ["SUPER8", "Star Wars: The Empire Strikes Back", "E.T.: The Extra Terrestrial", "All of them"],
//     name: "movies",
//     answer: 4,
//     divClass: ".movies"
// },
// {   question: "What is the game the boys play at the arcade in Season 2?",
//     options: ["Dig Dug", "Donkey Kong", "Pac-Man", "Tron"],
//     name: "arcade",
//     answer: 1,
//     divClass: ".arcade"
// },
// {   question: "Eleven's favorite food is...",
//     options: ["Pop-Tarts", "Eggos", "Twinkies", "Pizza"],
//     name: "food",
//     answer: 2,
//     divClass: ".food"

// },
//     question: "How does Joyce communicate to Will in the upside down world?",
//     ]}

//     var gameOver = "Game Over!";

//this initializes the button that starts the game//
// $("startGame").on(click, function() {
//     $(".question-screen").show();
//     console.log("hello");

//     $(this).hide();
// });

//start the timer
// $("#timeRemaining").on
// mixtape
// demogorgon
// christmas lights
// upside down world
// winona ryder
// shadow monster
// halloween costume
// bob's halloween costume
// where is the gate to the underground
// where do steve and nancy break up
// what did barb/s parents serve for dinner
// what year did season 2 take place
// who did dustin dance with at the snow ball
// 



