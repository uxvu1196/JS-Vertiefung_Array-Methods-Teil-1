/* 
Aufgabenstellung

Deklariere Variablen meinText1, meinText2, meinText3.
Definiere die Variable meinText1 mit dem Wert: Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.
Definiere die Variable meinText2 mit dem Wert: Wie geht es dir heute?
Definiere die Variable meinText3 mit dem Wert: Heute ist ein großer Tag für uns.

Deklariere Variablen: split1, split2, split3.
Definiere die Variable split1 mit dem Wert: meinText1.split();
Definiere die Variable split2 mit dem Wert: meinText1.split("");
Definiere die Variable split3 mit dem Wert: meinText1.split(" ");

Teste auch zwei weitere Variablen meinText2 und meinText3.
 */

let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."
let meinText2 = "Wie geht es dir heute?"
let meinText3 = "Heute ist ein großer Tag für uns."
console.log(meinText1)
console.log(meinText2)
console.log(meinText3)

let split1 = meinText1.split();
// split trennt einen String in verschiedene Teile auf
let split2 = meinText1.split("");
let split3 = meinText1.split(" ");
console.log(split1)
console.log(split2)
console.log(split3)
// Suche, ganzer Satz wird eingetippt und nicht gefunden, mit extra Suchbegriff wird es gefunden. Man zerlegt sozusagen den Satz und wendet split an 
