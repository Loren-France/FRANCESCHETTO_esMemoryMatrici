
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

let carteImages = [];
let firstIndex = null;
let secondIndex = null;
let lock = false;
let matchesFound = 0;
let output = "";

function start() {
    let diff = document.getElementById("difficoltà").value;
    let N = diff == "1" ? 4 : diff == "2" ? 6 : 8;

    firstIndex = null;
    secondIndex = null;
    lock = false;
    matchesFound = 0;
    output = "";

    const total = N * N;
    let imgs = [];
    for (let i = 0; i < total / 2; i++) {
        imgs.push(immaginiDisponibili[i]);
        imgs.push(immaginiDisponibili[i]);
    }
    carteImages = shuffle(imgs);

    crea(N);

    document.getElementById("output").innerHTML = output;
}

function crea(N) {
    let tabella = "";
    let c = 1;

    tabella += "<tbody>";
    for (let i = 0; i < N; i++) {
        tabella += "<tr>";
        for (let j = 0; j < N; j++) {
            tabella += "<td>";
            tabella += "<button onclick='cliccato(" + c + "," + N + ")' class='carte' id='carta" + c + "' data-index='" + (c - 1) + "'>";
            tabella += "<img src='Image/memory_back.png' alt='back'>";
            tabella += "</button>";
            tabella += "</td>";
            c++;
        }
        tabella += "</tr>";
    }
    tabella += "</tbody>";

    document.getElementById("schema").innerHTML = tabella;
}

function cliccato(c, N) {
    if (lock) return;

    const idx = c - 1;
    const btn = document.getElementById("carta" + c);

    if (!btn) return;

    if (firstIndex === idx) return;

    btn.innerHTML = "<img src='" + carteImages[idx] + "' alt='coppia'>";

    btn.disabled = true;

    if (firstIndex === null) {
        firstIndex = idx;
    } else {
        secondIndex = idx;
        lock = true;

        if (carteImages[firstIndex] === carteImages[secondIndex]) {
            matchesFound++;
            output += "Hai trovato una coppia!<br>";

            firstIndex = null;
            secondIndex = null;
            lock = false;

            if (matchesFound === (N * N) / 2) {
                output += "<strong>Hai trovato tutte le coppie! Complimenti!</strong><br>";
            }
            document.getElementById("output").innerHTML = output;
        } else {
            output += "Non è una coppia, riprova!<br>";
            document.getElementById("output").innerHTML = output;

            setTimeout(() => {
                const id1 = "carta" + (firstIndex + 1);
                const id2 = "carta" + (secondIndex + 1);
                const b1 = document.getElementById(id1);
                const b2 = document.getElementById(id2);
                if (b1) {
                    b1.innerHTML = "<img src='Image/memory_back.png' alt='back'>";
                    b1.disabled = false;
                }
                if (b2) {
                    b2.innerHTML = "<img src='Image/memory_back.png' alt='back'>";
                    b2.disabled = false;
                }

                // resetta stati
                firstIndex = null;
                secondIndex = null;
                lock = false;
            }, 2000);
        }
    }

    document.getElementById("output").innerHTML = output;
}

function shuffle(array) {
    let a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}