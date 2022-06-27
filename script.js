// !for loop
let i;
for (i = 0; i < 5; i++) {
    console.log(i);
}

let person = ['abc', 'abcd', 'abcdef', 'abcdefgh'];
for (j = 0; j < 5; j++) {
    console.log(person[j]);
}

for (j = 0; j < person.length; j++) {
    console.log(person[j]);
}

// !while loop
// let k = 0;
// while (k < 5) {
//     console.log(i);
//     k++
// }

// !do while loop
// let l = 0;
// do {
//     console.log(i);
//     l++
// } while (l < 5);

var x; // var is a global variable
let q; //let is limited block scop

// !break

let persons = ['vishnu', 'ram', 'raja', 'shanty', 'name'];
for (let i = 0; i < persons.length; i++) {
    if (persons[i] === 'raja') {
        console.log(persons[i]);
        break;
    }
    console.log("don't match");
}

// !continue
for (let i = 0; i < persons.length; i++) {
    if (persons[i] === 'shanty') {
        console.log(persons[i]);
        continue;
    }
    console.log("don't match");
}