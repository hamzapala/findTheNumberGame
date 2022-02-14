let myGuess = document.getElementById("guess");
let check = document.getElementById("button");
let result = document.getElementById("result");
let attempt = document.getElementById("count");
let background = document.getElementById("background");
let congrats = document.getElementById("congrats");

let realResult = Math.floor((Math.random()*100)+1);
console.log(realResult);

let closestLow = 0;
let closestHight = 100;

function findTheNumber() {
    if (realResult == myGuess.value){
        result.style.display = "none";
        attempt.style.display = "none"
        congrats.style.display = "block"
        congrats.innerHTML = "Congratulations you won!!!";
        congrats.style.color = "green";
        congrats.style.fontSize = "5rem";
        check.style.display = "none";
        myGuess.style.display = "none";
    } else if (myGuess.value > realResult){
        if(myGuess.value > 100){
            result.innerHTML = "Please enter a number less than 100";
            myGuess.value = "";
            return;
        }
        closestHight = myGuess.value;
        result.innerHTML = `Enter a number between ${closestLow} and ${closestHight}`;
    } else if (myGuess.value < realResult){
        if(myGuess.value < 0) {
            result.innerHTML = "Enter a number greater than 0.";
            myGuess.value = "";
            return;
        }
        closestLow = myGuess.value;
        result.innerHTML = `Enter a number between ${closestLow} and ${closestHight}`;
    } else if(myGuess.value == ""){
        result.innerHTML = "Please enter a number...";
    }   
    myGuess.value = "";
};

check.addEventListener("click", findTheNumber);


let count = 10;
function countFunction(){
    count--;
    attempt.innerHTML = `Number of attemps: ${count}`;
    if (count == 0) {
        
        attempt.innerHTML = "Hey Looser!!!";
        attempt.style.color = "red";
        attempt.style.fontSize = "5rem";
        check.style.display = "none";
        myGuess.style.display = "none";
        result.style.display = "none";
    }
}

check.addEventListener("click", countFunction);