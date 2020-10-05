/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23
function optellen (getal1, getal2, getal3){
    const optelsom = getal1 + getal2 + getal3
    return optelsom
}
const rekenUit = optellen(3,4,5)
console.log(rekenUit);

/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"
function stringPlakken (woord1, woord2) {
    const woorden = woord1 + woord2
    return woorden
}
const toverspreuk = stringPlakken("abra", "cadabra");
console.log(toverspreuk);


/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"
function omwikkelen (woord, karakter) {
    const voorAchter = karakter+woord+karakter
    return voorAchter
}
const geplakt = omwikkelen("hoi","!");
console.log(geplakt);

/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"
function alphabet  (letter1, letter2, letter3) {
    const letters = letter1+letter2+letter3
    return letters
}

const alleLetters = alphabet("a","b","c");
console.log(alleLetters);

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick, Nova, Mitchel, Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E, en F!"

function begroetting (groet, naam1, naam2, naam3) {
    const halootjes = groet + " "+ naam1 + " " +naam2 +" en "+naam3
    return halootjes
}

const halloDaar = begroetting("hoi","piet","kees","henk");
console.log(halloDaar);

