/* 
Aufgabenstellung


Elemente hinzufügen mit splice()
Um Elemente hinzuzufügen, müssen wir sie als dritten, vierten, fünften Parameter (abhängig davon, wie viele hinzugefügt werden sollen) zur splice() Methode angeben:

Syntax: array.splice(index, Anzahl der Elemente, Element, Element);
Verwende den Code aus dem Kommentarbereich.
Füge Fotos mit der Nummer 008-010 hinzu.
Gib array in der Konsole aus.
Fügen Fotos mit der Nummer 014-019 hinzu.
Gib array in der Konsole aus.
Füge den Rest(000-019) der Fotos hinzu, so dass sie numerisch angezeigt werden.
Gib array in der Konsole aus.
 */


let array = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg"];
// console.log(array)

array.splice(2, 0,
    "imageTeilnehmer008supercode.jpg", 
    "imageTeilnehmer009supercode.jpg", 
    "imageTeilnehmer010supercode.jpg");
console.log(array)

array.splice(5, 0,
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg");
console.log(array)

 
array.splice(2, 0,
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg");
console.log(array) 

array.splice(11, 0, 
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg")
    console.log(array) 

