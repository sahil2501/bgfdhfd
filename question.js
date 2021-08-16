var score1 = 0;
var score2 = 0;
name_one = localStorage.getItem("name_1");
name_two = localStorage.getItem("name_2");
function turn_display() {
    document.getElementById("question").innerHTML = "<h3 id = 'ques'>" + "Question turn: " + name_one + "</h3>";
    document.getElementById("answer").innerHTML = "<h3 id = 'ans'>" + "Answer turn: " + name_two + "</h3>";

}

function back() {
    window.location = "index.html";
}

function send() {
    num1 = document.getElementById("num_1").value;
    num2 = document.getElementById("num_2").value;
    label1 = "<label>" + num1 + "</label>";
    label2 = "<label> x </label>";
    label3 = "<label>" + num2 + "</label><br><br>";
    button = "<button id = 'outputButton' onclick = 'check()'>Check</button><br>";
    input = "<input id = 'value' type = 'text' placeholder='Answer...'><br><br>";
    document.getElementById("output").innerHTML = label1 + label2 + label3 + input + button;
}
answer = "player_two";
question = "player_one";
function check() {
    answer_ = document.getElementById("value").value;
    if (answer_ == num1 * num2) {
        if (answer = "player_two") {
        answer = "player_one";
        score1 = score1 + 1;
        document.getElementById("score1").innerHTML = name_one + "'s score = " + score1;
        }
        else  {
            answer = "player_two";
            score2 = score2 + 1;
            document.getElementById("score2").innerHTML = name_two + "'s score = " + score2;
            }
    }
    if (question == "player_one") {
        question = "player_two";
        document.getElementById("ques").innerHTML = "Question Turn = " + name_two;
    }
    else {
        question = "player_one";
        document.getElementById("ques").innerHTML = "Question Turn = " + name_one;
    }
    if (answer == "player_one") {
        answer = "player_two";
        document.getElementById("ans").innerHTML = "Answer Turn = " + name_two;
    }
    else {
        answer = "player_one";
        document.getElementById("ans").innerHTML = "Answer Turn = " + name_one;
    }

    document.getElementById("output").innerHTML = "";
}
