/* 
Aufgabenstellung


Verwende den Code aus dem Kommentarbereich.
Verwende den Befehl slice(), um die Daten zu kopieren.
Kopiere die Bilder 007-014 und deklariere sie als Variable copyImg1.
Gib copyImg1 und array in der Konsole aus.
Kopiere die Bilder 006-011 und deklariere sie als Variable copyImg2.
Gib copyImg2 in der Konsole aus.
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

let copyImg1 = array.slice(7, 15)
console.log(copyImg1)

let copyImg2 = array.slice(6,12)
console.log(copyImg2)