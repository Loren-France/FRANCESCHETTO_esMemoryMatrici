function start() {
let diff=document.getElementById("difficoltà").value;
let carte;
let output="";
let N=0;

N= diff=="1" ? 4
    : diff=="2" ? 6
    : 8;

    if(N==4) {
        carte=[[],[],[],[]];
    }
    else if(N==6) {
        carte=[[],[],[],[],[],[]];
    }
    else{
        carte=[[],[],[],[],[],[],[],[]];
    }

    crea(carte,N);

document.getElementById("output").innerHTML = output;
}

function crea(carte,N) {
let tabella="";

for(let i=0;i<N;i++) {
    for(let j=0;j<N;j++){
        tabella+="<button onclick='cliccato()'><img src='Image/memory_back.png' alt='back'></button>";
    }
    tabella+="<br>";
}

document.getElementById("tabella").innerHTML = tabella;
}