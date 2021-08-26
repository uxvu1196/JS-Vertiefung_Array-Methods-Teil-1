/* 
Aufgabenstellung


Die Methode unshift() fügt neue Elemente zum Anfang eines Arrays hinzu.

Definiere deutscheGerichte (die du kennen solltest) mit einem Array, das enthält: 
Speckkuchen, Thüringer Rostbratwurst, Quarkkeulchen, Sauerbraten.
Füge zum Array 5 deutsche Gerichte mit dem Befehl unshift() hinzu.
Gib es in der Konsole aus.
 */

let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"]
console.log(deutscheGerichte)

deutscheGerichte.unshift("Schweinsbraten")
deutscheGerichte.unshift("Schweinshaxe mit Brezelknödeln")
deutscheGerichte.unshift("Käsespätzl")

let gericht = deutscheGerichte
console.log(gericht)