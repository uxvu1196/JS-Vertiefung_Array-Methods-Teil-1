/* 
Aufgabenstellung


Die push()-Methode fügt neue Elemente am Ende eines Arrays hinzu.
Definiere ein Array songs, das folgendes enthält: 
Bohemian Rhapsody, Stairway to Heaven, Hotel California

Füge diesem Array deine 3 Lieblingslieder mit dem Befehl songs.push("Sweet Child O'Mine"); hinzu.
Speichere das Array als Variable totalSongs.
Gebe totalSongs in der Konsole aus.

Definiere ein Array besteFussballerAllerZeiten, das folgendes enthält:
die 5 besten Fußballspieler.
Füge 3 Torhüter hinzu.
Gebe es in der Konsole aus.
 */
let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"]
console.log(songs)

songs.push("Dilemma", "The darkest night", "Summer Jam")
let totalSongs = songs;
console.log(totalSongs)

let besteFussballerAllerZeiten = ["Müller Thomas", "Messi", "Ronaldo", "Neymar", "Maradona"]

besteFussballerAllerZeiten.push("Manuel Neuer", "Oliver Kahn", "Marc-André ter Stegen")
console.log(besteFussballerAllerZeiten)

/* 
Aufgabenstellung


Du kannst mehrere Elemente zu Deinem Array hinzufügen.
Verwende das Komma zwischen den Werten.
const artists = ["michael", "elvis"];
artists.push("justin", "charlie");

Füge Songs zu Array hinzu, die dir nicht gefallen.
Füge die besten 3 Trainer aller Zeiten zu Array hinzu.
 */

const artists = ["michael", "elvis"];
artists.push("justin", "charlie");
console.log(artists)




