// chiediamo all'utente due parole in successione, veifichiamo quale delle due parole è più lunga e stampiamo in console un messaggio appropriato 

const pari_dispari = prompt("Pari o Dispari?").toLowerCase();

const numero_utente = Number(prompt("digita un numero compreso tra 1 e 9:"));

console.log(pari_dispari, numero_utente);


const pc_number = Math.floor(Math.random()* 8) + 1;
console.log(pc_number);

const result = numero_utente + pc_number;

if (result % 2 == 0) {
    console.log(result, "ha vinto pari");
    var risultato = "pari";
} else {
    console.log(result, "ha vinto dispari");
    var risultato ="dispari";
    }

if (risultato == pari_dispari) {
    console.log("user wins");

} else {
    console.log("pc wins");
}