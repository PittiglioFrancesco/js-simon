// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// ex

var random = randomAlert();
console.log(random);

setTimeout(function(){

    var numeri = input();

    var count = output(random, numeri);

    document.getElementById("gen").innerHTML = "I numeri da indovinare erano " + random + ".";

    document.getElementById("count").innerHTML = "Sei riuscito ad indovinare " + (count.length) + " numeri.";

    document.getElementById("demo").innerHTML = "Hai indovinato i seguenti numeri: " + count + ".";

}, 30000);

// funzioni

function randomAlert(){

    var vet = [];

    for (var i = 0; i < 5; i++){
        vet.push(parseInt(Math.floor(Math.random() * 100) + 1))
    }

    alert(vet[0] + " " + vet[1] + " " + vet[2] + " " + vet[3] + " " + vet[4] + " ")

    return vet;

}

function input(){

    var array = [];

    for (var i = 0; i < 5; i++){
        array.push(parseInt(prompt("Inserisci il numero che si trovava in " + (i+1) + " posizione")));
    }
    
    return array;

}

function output(a, b){

    var count = [];

    for (var i = 0; i < 5; i++){
        if (a[i] == b[i]) {
            count.push(a[i]);
        }
    }

    return count;

}