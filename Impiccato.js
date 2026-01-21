const parole = [
  "casa","albero","computer","scuola","montagna","fiume","gatto","cane",
  "telefono","tastiera","finestra","porta","quaderno","penna","libro","zaino",
  "strada","macchina","bicicletta","aereo","treno","mare","spiaggia","sole",
  "luna","stella","nuvola","pioggia","vento","neve","pizza","pasta","gelato",
  "cioccolato","biscotto","acqua","succo","musica","chitarra","pianoforte",
  "film","attore","regista","gioco","console","joystick","schermo","monitor",
  "mouse","programma","codice","algoritmo","rete","internet","server",
  "database","password","sicurezza","login","account","lampada","tavolo",
  "sedia","divano","letto","cuscino","coperta","armadio","specchio","orologio",
  "giardino","fiore","foglia","prato","bosco","deserto","isola","vulcano",
  "pianeta","universo","astronauta","razzo","satellite","missione","robot",
  "intelligenza","futuro","tecnologia","energia","batteria","motore",
  "circuito","sensore","segnale","frequenza","numero","variabile","funzione",
  "matrice","puntatore"
];
const maxvite = 6;
let gameover = false;
let vite = maxvite;

const lettere = "QWERTYUIOPASDFGHJKLZXCVBNM";

const statoLettere = {
    A: false, B: false, C: false, D: false, E: false,
    F: false, G: false, H: false, I: false, J: false,
    K: false, L: false, M: false, N: false, O: false,
    P: false, Q: false, R: false, S: false, T: false,
    U: false, V: false, W: false, X: false, Y: false, Z: false
};

let parolaScelta = "";
let parolaMostrata = [];

const righe = 2;
const colonne = 13;

function gestisciClick(lettera, cella) {

    if (gameover) {
        alert("La partita è finita");
        return;
    }

    if (statoLettere[lettera]) {
        alert(`La lettera ${lettera} è già stata cliccata`);
        return;
    }

    statoLettere[lettera] = true;

    cella.style.backgroundColor = "yellow";
    cella.style.color = "red";

    let trovata = false;

    for (let i = 0; i < parolaScelta.length; i++) {
        if (parolaScelta[i] === lettera) {
            parolaMostrata[i] = lettera;
            trovata = true;
        }
    }

    document.getElementById("parola").innerHTML = parolaMostrata.join(" ");
    
   

    if (!trovata) {
        vite--;
        let idCuore = "pt" + (maxvite - vite);
        document.getElementById(idCuore).innerHTML = '<img src="x.png" width="75">';
        alert("Lettera sbagliata! Vite rimaste: " + vite);

        if (vite <= 0) {
            alert("GAME OVER! La parola era: " + parolaScelta);
            gameover = true;
        }

    } else {
        alert("Lettera trovata");
         if(parolaMostrata.indexOf("_")===-1){
        alert("hai vinto!!!");
        gameover = true;
        return;
    }
    }


}

function creaTastiera() {
    const ts = document.getElementById("lettere");
    ts.innerHTML = "";

    let h = "";
    let index = 0;

    for (let r = 0; r < righe; r++) {
        h += "<tr>";
        for (let c = 0; c < colonne; c++) {
            h += `<td class="lettere" onclick="gestisciClick('${lettere[index]}', this)">`;
            h += lettere[index];
            h += "</td>";
            index++;
        }
        h += "</tr>";
    }

    ts.innerHTML = h;
}

function partita() {

    vite = maxvite;
    gameover = false;

    for (let i = 1; i <= maxvite; i++) {
        document.getElementById("pt" + i).innerHTML = '<img src="cuore.png" width="75">';
    }

    for (let l in statoLettere) {
        statoLettere[l] = false;
    }

    let p = Math.floor(Math.random() * parole.length);
    parolaScelta = parole[p].toUpperCase();

    parolaMostrata = Array(parolaScelta.length).fill("_");

    document.getElementById("parola").innerHTML = parolaMostrata.join(" ");
}


function nuovaPartita(){

    if(!gameover){
        alert("la partita non é ancora finita!!");
        return;

    }
    
    location.reload();

}

creaTastiera();
partita();


