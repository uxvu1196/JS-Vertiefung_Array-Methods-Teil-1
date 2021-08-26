/* 
Aufgabenstellung


Die Methode shift() entfernt das erste Element eines Arrays.

Verwende das deutscheGerichte-Array aus der vorherigen Übung.
Entferne aus dem Array 3 Werte mit Hilfe der Methode shift();
Speichere diese als Array nichtGut.
Gib diese Variable in der Konsole aus.
 */


let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"]
console.log(deutscheGerichte)

deutscheGerichte.shift("Speckkuchen")
let g1 = deutscheGerichte
console.log(g1)

deutscheGerichte.shift( "Thüringer Rostbratwurst")
let g2 = deutscheGerichte
console.log(g2)

deutscheGerichte.shift("Quarkkeulchen")
let g3 = deutscheGerichte
console.log(g3)

console.log(deutscheGerichte)
