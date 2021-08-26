/* 
Aufgabenstellung


Die pop()-Methode entfernt das letzte Element eines Arrays.
Verwende den Code aus den vorherigen Übungen.
Entfernt zuletzt hinzugefügte Song aus dem Array totalSongs.
Speichere diesen als Variable entfernterSong.
Gib entfernterSong und totalSongs in der Konsole aus.

Entferne den zuletzt hinzugefügten Torhüter aus dem Array bestenFussballerAllerZeiten.
Speichere ihn als Variable entfernterFussballer.
Gib entfernterFussballer und bestenFussballerAllerZeiten in der Konsole aus.
Entferne dann 3 Fussballer.
Gib die Variable bestenFussballerAllerZeiten in der Konsole aus.
 */

let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"]

songs.push("Dilemma", "The darkest night", "Summer Jam")
let totalSongs = songs;

totalSongs.pop("Summer Jam")
let entfernterSong = totalSongs
console.log(entfernterSong)


let besteFussballerAllerZeiten = ["Müller Thomas", "Messi", "Ronaldo", "Neymar", "Maradona"]

besteFussballerAllerZeiten.push("Manuel Neuer", "Oliver Kahn", "Marc-André ter Stegen")

besteFussballerAllerZeiten.pop("Marc-André ter Stegen");
let entfernterFussballer = besteFussballerAllerZeiten;
console.log(entfernterFussballer);

