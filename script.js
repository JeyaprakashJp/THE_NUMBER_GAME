var rand = Math.floor(Math.random() * 100);
var limit = parseInt(1);

document.getElementById("b1").addEventListener('click', func);
function func() {
    if (limit <= 10) {
        document.getElementById("life").innerHTML = "Oops! Your Guess is You have: " + (11 - limit) + " Lives Remaining";

        var data = document.getElementById("i1").value;


        if (rand == data) {
            document.getElementById("result").innerHTML = "You Won.!";
        }
        else {
            console.log(data);
            document.getElementById("result").innerHTML = "In-correct";
            limit++;
        }
    } else {
        document.getElementById("result").innerHTML = "Game over";
        window.location.href="next.html";

    }
}