var playing = false;
var score = 0;
var action;
var correctanswer;
var timeremaining = 0;
var startBtn = document.getElementById("startgame").onclick = function() {
        //if playing
        if (playing == true) {
            //reload the page
            location.reload();



        } else {
            playing = true;
            score = 0;
            document.getElementById("scorevalue").innerHTML = score;
            show("time");
            timeremaining = 60;
            hide("gameOver");
            document.getElementById("startgame").innerHTML = "Reset Game";
            startCountDown();
            generateQA();
            document.getElementById("timeValue").innerHTML = timeremaining;



        }

    }
    //click on answer



for (i = 1; i < 5; i++) {

    document.getElementById("box" + i).onclick = function() {
        if (playing == true) {
            if (this.innerHTML == correctanswer) {
                score += 1;
                document.getElementById("scorevalue").innerHTML = score;

                hide("wrong");
                show("correct");
                setTimeout(() => {
                    hide("correct");
                }, 1000);
                generateQA();
            } else {
                hide("correct");
                show("wrong");
                setTimeout(() => {
                    hide("wrong");
                }, 1000);

            }
        }
    }

}


function startCountDown() {
    action = setInterval(
        function() {
            timeremaining -= 1;
            document.getElementById("timeValue").innerHTML = timeremaining;
            if (timeremaining == 0) {
                clearInterval(action);
                show("gameOver");
                document.getElementById("gameOver").innerHTML = "<p>Game Over</p> <p>Your Score is : " + score + "</p>";
                hide("timeremaining");
                hide("correct");
                hide("wrong");
                playing = false;
                document.getElementById("startgame").innerHTML = "Start Game";


            }
        }, 1000);
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

duc

function generateQA() {

    var x = Math.round(Math.random() * 9) + 1;
    var y = Math.round(Math.random() * 9) + 1;
    correctanswer = x * y;
    var ans = [correctanswer];
    document.getElementById("question").innerHTML = x + "X" + y;
    var correctPosition = 1 + Math.round(Math.random() * 3);
    document.getElementById("box" + correctPosition).innerHTML = correctanswer;
    /*fill one box with correct answer*/
    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wronganswer;
            do {
                var x = Math.round(Math.random() * 9) + 1;
                var y = Math.round(Math.random() * 9) + 1;
                wronganswer = (x * y);

            }
            while (ans.indexOf(wronganswer) > -1);
            document.getElementById("box" + i).innerHTML = wronganswer;
            ans.push(wronganswer);

        }
    }

}