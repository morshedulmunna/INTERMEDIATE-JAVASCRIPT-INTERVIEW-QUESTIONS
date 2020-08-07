//map: 
const numbers = [2, 23, 4, 5, 33, 4, 3];
//  const output = [];
//  for(let i = 0; i< numbers.length; i++){
//      const element = numbers[i];
//      const result = element * element;
//      output.push(result);
//  }
const result = numbers.map(x => x * x); // same shortcut code using map
console.log(result);

// filter

const bigger = numbers.filter(x => x > 2)
console.log(bigger);

// find

const isThere = numbers.find(x => x === 5);
console.log(isThere);