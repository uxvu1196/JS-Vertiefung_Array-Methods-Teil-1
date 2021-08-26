/* 
Erstelle ein Array, das aus Deiner Adresse besteht: Straße, Postleitzahl, Ort, Bundesland.
Erstelle ein Array besteFreunde, das aus den Namen deiner Freunde besteht.
Erstelle ein Array person, das aus deinem Namen, Nachnamen, Spitznamen, Alter, Hobby, Geburtsort, Bootcamp besteht.
Zeige alle Arrays in der Konsole.
Füge die Arrays adresse und bestefreunde zum Array person hinzu.
Gib das Array person in der Konsole aus und versuche auch die jeweiligen Arrays aus der Array person in der Konsole auszugeben. 
*/

let adresse = ["Altostraße 67", "81245", "München", "Bayern"]
let besteFreunde = ["Taras", "Cem"]
let person = ["Uyen", "Vu", "habe keinen", "24", "Essen gehen und neue Bars und Restaurant entdecken", "Museum besuchen", "Pole", "Joggen", "Tanzen gehen", "Supercode"]
console.log(adresse)
console.log(besteFreunde)
console.log(person)

person.push(adresse, besteFreunde)
console.log(person)

console.log(person[10]);
console.log(person[11]);

// tabelle in einer tabelle


// LEV1_1_2
console.log(person.length)
console.log(adresse.length)
console.log(besteFreunde.length)