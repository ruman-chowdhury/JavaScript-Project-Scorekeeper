var button1 = document.querySelector('#btnPlayer1');
var p1Score = document.querySelector('#score1');
var counter1 = 0;

var button2 = document.querySelector('#btnPlayer2');
var p2Score = document.querySelector('#score2');
var counter2 = 0;

var reset = document.querySelector('#reset');
var result = document.querySelector("#result");



button1.addEventListener('click',function(){

    var limit = document.querySelector('#limit').value;
    counter1++;
    p1Score.textContent = counter1;

    if (counter1 >= limit && counter1>counter2){
        p1Score.classList.add('winnerColor');
        button1.setAttribute("disabled","true");
        button2.setAttribute("disabled", "true");

        displayWinner();
    }
});

button2.addEventListener("click",function(){

    var limit = document.querySelector('#limit').value;
    counter2++;
    p2Score.textContent = counter2;

    if (counter2 >= limit && counter2>counter1){
        p2Score.classList.add('winnerColor');
        button1.setAttribute("disabled","true");
        button2.setAttribute("disabled","true");

        displayWinner();
    }
});


reset.addEventListener("click",function(){
    button1.removeAttribute("disabled");
    button2.removeAttribute("disabled");

    p1Score.classList.remove("winnerColor");
    p2Score.classList.remove("winnerColor");

    counter1 = 0;
    counter2 = 0;

    p1Score.textContent = counter1;
    p2Score.textContent = counter2;

    document.querySelector("#limit").value = 5;
    result.textContent = " ";
});


//counter is global variable
function displayWinner(){

    if(counter1>counter2){
        result.textContent = "Player1 Won :) ";
        result.classList.add('winnerColor');
    }else{
        result.textContent = "Player2 Won :)";
        result.classList.add('winnerColor');
    }

}