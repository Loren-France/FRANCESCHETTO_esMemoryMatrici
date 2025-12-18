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
let output="";

function start() {
let diff=document.getElementById("difficoltà").value;
let carte;
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

let immagini = [];
    for (let i = 0; i < (N*N)/2; i++) {
        immagini.push(immaginiDisponibili[i]);
        immagini.push(immaginiDisponibili[i]); 
    }
    immagini = shuffle(immagini);

    tabella+="<tbody>";
    for(let i=0;i<N;i++) {
    tabella+="<tr>";
    for(let j=0;j<N;j++){
        carte[i][j] = "<button onclick='cliccato(" + c +","+ N + ")' class='carte' id='carta" + c + "'><img src='Image/memory_back.png' alt='back'></button>";
        tabella+="<td>"+carte[i][j]+"</td>";
        c++;
    }
    tabella+="</tr>";
}
    tabella+="</tbody>";

document.getElementById("schema").innerHTML = tabella;
}

function cliccato(c,N) {
let randomCard1=Math.floor(Math.random()*(N*N))+1;
let randomCard2=Math.floor(Math.random()*(N*N))+1;

    if(prima){
        document.getElementById("carta"+c).disabled = true;
        document.getElementById("carta"+c).innerHTML = "<img src='"+immagini+"' alt='coppia'>";
        older="carta"+c;
        seconda=true;
        prima=false;
    }else if(seconda){
        document.getElementById("carta"+c).innerHTML = "<img src='Image/"+randomCard2+"coppia.png' alt='coppia'>";
        if(randomCard1==randomCard2){
            output+="Hai trovato una coppia!";
        } else{
            output+="Non è una coppia, riprova!";
        for(let i=1;i<=N*N;i++){
            document.getElementById("carta"+i).disabled = true;
        }
        setTimeout( () => {
            document.getElementById("carta"+c).innerHTML = "<img src='Image/memory_back.png' alt='back'>";
            document.getElementById(older).innerHTML = "<img src='Image/memory_back.png' alt='back'>";
            for(let i=1;i<=N*N;i++){
                document.getElementById("carta"+i).disabled = false;
            }
        }, 2000);
        }
        prima=true;
        seconda=false;
    }else{}
document.getElementById("output").innerHTML = output;
}