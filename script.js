let number = 0
number = ((Math.floor(Math.random()*20)))
let tentativi = 5
let Punteggio = 0
let recordPunteggio = 0
let answer = ""
document.getElementById("RecordPoints").innerText = "Record: " + recordPunteggio
document.getElementById("Points").innerText = "Punteggio: " + Punteggio
document.getElementById("Lives").innerText = "Vite: " + "●".repeat(tentativi);

function CheckNumber(val){
    val = document.getElementById("InsertNumber").value;
    if (val == number && tentativi > 0){
        document.getElementById("Sfondo").style.backgroundColor = "green";
        alert("Win!");
        number = ((Math.floor(Math.random()*20)))
        console.log(number)
        Punteggio += 1
        if (Punteggio > recordPunteggio) {
            recordPunteggio = Punteggio
            document.getElementById("RecordPoints").innerText = "Record: " + recordPunteggio
        }
        setTimeout(function(){
            document.getElementById("Sfondo").style.transition = "background-color 0.5s ease";
            document.getElementById("Sfondo").style.backgroundColor = "";
        }, 200); 
    }
    else if(tentativi > 0) {
        document.getElementById("Sfondo").style.backgroundColor = "red";
        setTimeout(function(){
            document.getElementById("Sfondo").style.transition = "background-color 0.5s ease";
            document.getElementById("Sfondo").style.backgroundColor = "";
        }, 200); 
        tentativi -= 1;
        if(val<number){
            answer = "Your number has to be greater";
        }
        else{
            answer = "Your number has to be lower";
        }
        document.getElementById("Tip").innerText = answer;
    }
    if (tentativi == 0){
        document.getElementById("Sfondo").style.backgroundColor = "red";
        alert("Game Over!");
        if (Punteggio > recordPunteggio) {
            recordPunteggio = Punteggio
            document.getElementById("RecordPoints").innerText = "Record: " + recordPunteggio
        }
        Punteggio = 0 
    }
    document.getElementById("RecordPoints").innerText = "Record: " + recordPunteggio
    document.getElementById("Points").innerText = "Punteggio: " + Punteggio
    document.getElementById("Lives").innerText = "Vite: " + "●".repeat(tentativi);
    console.log(tentativi);
}
console.log(number)