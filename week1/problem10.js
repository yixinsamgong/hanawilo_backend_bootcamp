// create a new Map() object
const myMap = new Map();
myMap.set('name', 'john doe');
console.log(myMap.get('name') === 'john doe');
myMap.delete('name');
console.log(myMap);