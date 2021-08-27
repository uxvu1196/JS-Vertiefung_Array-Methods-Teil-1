/* 
Aufgabenstellung


Elemente entfernen mit splice()
Um Elemente zu entfernen, müssen wir den Index-Parameter und die Anzahl der zu entfernenden Elemente angeben.

Syntax: array.splice(index, Anzahl der Elemente);
Verwende den Code aus dem Kommentarbereich.
Entferne die Fotos mit der Nummer 004-007.
Deklariere die gelöschten Bilder als delImg1
Gib delImg1 und array in der Konsole aus.
Entferne die Fotos mit der Nummer 010-014.
Deklariere die gelöschten Bilder als delImg2
Gib delImg2 und array in der Konsole aus.

Syntax: array.splice(index);// Jedes Element, das ab Index 2 beginnt, wird entfernt.
Entferne alle Fotos außer den ersten beiden.
Deklariere die gelöschten Bilder als delImg3.
Gib delImg3 und array in der Konsole aus. 
*/

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
console.log(array)

let delImg1 = array.splice(4, 4);
console.log(delImg1)

let delImg2 = array.splice(6, 5);
console.log(delImg2)

array.splice(2);
let delImg3 = array
console.log(delImg3)


