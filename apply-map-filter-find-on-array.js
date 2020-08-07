//  how to find-out any value on array using map,filter and find 

const student = [
    { id: 34, name : "Omar Sunny"},
    { id: 45, name : "Maannaaaaaa"},
    { id: 54, name : "Munna"},
    { id: 76, name : "Morshedul Munna"}
]

const name = student.map( s=> s.name);
const ids = student.map( s=> s.id);
const bigger = student.filter( s=> s.id>45);
const biggerOne = student.find( s=> s.id>54);
console.log ( name);
console.log ( ids);
console.log ( bigger);
console.log ( biggerOne);
