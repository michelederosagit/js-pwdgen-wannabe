// Dichiarazione Nome
var nome = prompt("Scrivi qui il tuo nome!");

// Dichiarazione Cognome
var cognome = prompt("Scrivi qui il tuo cognome!");

// Dichiarazione Colore Preferito
var colore = prompt("Scrivi qui il tuo colore preferito!");

// Dichiarazione Anno nascita
var eta = prompt("Scrivi qui la tu età!")

// Dichiarazione Password Generata
var password = nome + cognome + colore + "19";

// Dichiarazione età
var annonascita = 2019 - eta;

// Nome + Cognome
var nomeintero = nome + " " + cognome;

// Alert Ringraziamenti
alert("Grazie " + nome + " " + cognome);


// Log Risultati
console.log("Tu sei " + nome + " " + cognome, "ed il tuo colore preferito è il " + colore);
console.log("Password Generata " + password);
console.log("Sei nato nel " + annonascita)

// Mostro il risultato nell'HTML
document.getElementById('password-generata').innerHTML = password;
document.getElementById('anno-nascita').innerHTML = annonascita;
document.getElementById('nomeintero').innerHTML = "Ciao " + nomeintero;
