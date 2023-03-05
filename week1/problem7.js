const someObject = { 
  color: 'black'
};

Object.assign(someObject,{name: 'john doe'});

someObject.age = 22;

someObject["address"] = '123 test address';

console.log(someObject);

console.log(Object.keys(someObject));

console.log(Object.values(someObject));

for (let key in someObject) {
  console.log(someObject[key]);
}