function start() {
let diff=document.getElementById("difficoltà").value;
let carte;
let output="";
let N=0;

N= diff=="1" ? 4
    : diff=="2" ? 5
    : 6;

    if(N==4) {
        carte=[[],[],[],[]];
    }
    else if(N==5) {
        carte=[[],[],[],[],[]];
    }
    else{
        carte=[[],[],[],[],[],[]];
    }

    crea(carte,N);




document.getElementById("output").innerHTML = output;
}

function crea(carte,N) {
let tabella="";

for(let i=0;i<carte.length;i++) {
    for(let j=0;j<carte[i].length;j++){
        carte[i][j]=document.createElement("button");
        tabella.appendChild(carte[i][j]);
    }
}

document.getElementById("schema").innerHTML = tabella;
}