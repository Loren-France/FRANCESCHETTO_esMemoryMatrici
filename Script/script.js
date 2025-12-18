let prima=true;
let seconda=false;
let immaginiDisponibili = [
    "Image/1coppia.png",
    "Image/2coppia.png",
    "Image/3coppia.png",
    "Image/4coppia.png",
    "Image/5coppia.png",
    "Image/6coppia.png",
    "Image/7coppia.png",
    "Image/8coppia.png",
    "Image/9coppia.png",
    "Image/10coppia.png",
    "Image/11coppia.png",
    "Image/12coppia.png",
    "Image/13coppia.png",
    "Image/14coppia.png",
    "Image/15coppia.png",
    "Image/16coppia.png",
    "Image/17coppia.png",
    "Image/18coppia.png"
];
let older;

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
    let c=1;

    tabella+="<tbody>";
    for(let i=0;i<N;i++) {
    tabella+="<tr>";
    for(let j=0;j<N;j++){
        carte[i][j] = "<button onclick='cliccato(" + c + ")' class='carte' id='carta" + c + "'><img src='Image/memory_back.png' alt='back'></button>";
        tabella+="<td>"+carte[i][j]+"</td>";
        c++;
    }
    tabella+="</tr>";
}
    tabella+="</tbody>";

document.getElementById("schema").innerHTML = tabella;
}

function cliccato(c) {

    if(prima){
        document.getElementById("carta"+c).disabled = true;
        document.getElementById("carta"+c).innerHTML = "<img src='Image/1coppia.png' alt='coppia'>";
        older="carta"+c;
        seconda=true;
        prima=false;
    }else if(seconda){
        document.getElementById("carta"+c).innerHTML = "<img src='Image/2coppia.png' alt='coppia'>";
        for(let i=1;i<=16;i++){
            document.getElementById("carta"+i).disabled = true;
        }
        setTimeout( () => {
            document.getElementById("carta"+c).innerHTML = "<img src='Image/memory_back.png' alt='back'>";
            document.getElementById(older).innerHTML = "<img src='Image/memory_back.png' alt='back'>";
            for(let i=1;i<=16;i++){
                document.getElementById("carta"+i).disabled = false;
            }
        }, 2000);
        prima=true;
        seconda=false;
    }else{}


}