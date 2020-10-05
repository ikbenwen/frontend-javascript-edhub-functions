/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23
function optellen (getal1, getal2, getal3){
    return getal1 + getal2 + getal3
}
console.log(optellen(1,2,3));

/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"
function toverspreuk (woord1, woord2) {
    return woord1 + woord2
}
console.log(toverspreuk("abra", "cadabra"));

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"
function omwikkelen (woord, karakter) {
    return karakter+woord+karakter
}

console.log(omwikkelen("hoi","!"));

/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"
function alphabet  (letter1, letter2, letter3) {
    return letter1+letter2+letter3
}

console.log(alphabet("a","b","c"));
//boven mijn oplossing onder oplossing van het antwoordenblad.

function concatenate(wordArray) {
    let output = "";

    for (let i = 0; i < wordArray.length; i++) {
        output = output + wordArray[i];
    }
    return output;
}
console.log(concatenate(["a", "b", "c"]));
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

// boven mijn uitwerking, onder de juiste.

function greeting(stringsArray) {
    let greeting = "Hoi ";

    for (let i = 0; i < stringsArray.length; i++) {
        // als dit de laatste entry is, voeg dan het uitroepteken toe
        if (i === stringsArray.length - 1) {
            return greeting = greeting + "en " + stringsArray[i] + "!";
        }
        // als de array maar twee namen bevat, voeg dan geen komma toe
        if (stringsArray.length === 2) {
            greeting = greeting + stringsArray[i] + " ";
        }
        // als de array meer dan twee namen bevat, voeg dan wel een komma toe
        if (stringsArray.length > 2) {
            greeting = greeting + stringsArray[i] + ", ";
        }
    }

    return greeting;
}


console.log(greeting(["Piet", "Henk"]));