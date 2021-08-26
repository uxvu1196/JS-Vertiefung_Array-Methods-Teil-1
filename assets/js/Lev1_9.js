/* 
Aufgabenstellung

Erstelle ein Array und ordne es einer Variablen zu.
Array mit Werte: 23, 54, 75;
Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
Verwende die Unshift-Methode, um 5 Werte an der Vorderseite deines Arrays hinzuzufügen.
Verwende die Pop-Methode, um 2 Werte von der Rückseite deines Arrays zu entfernen.
Verwende die Shift-Methode, um 2 Werte von der Vorderseite deines Arrays zu entfernen.
 */

let number = [23, 54, 75]
console.log(number)

number.push(1, 2, 3, 4, 5)
let number2 = number
console.log(number2)

number2.unshift(10, 9, 8, 7, 6, )
let number3 = number2
console.log(number3)

number3.pop()
number3.pop()
let number4 = number3
console.log(number4)

number4.shift()
number4.shift()
let number5 = number4
console.log(number5)