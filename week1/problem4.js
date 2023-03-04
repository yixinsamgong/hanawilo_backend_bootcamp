const a = 'hi'; 
console.log(c);
const someFunction = (arg) => { 
    const b = 'bye';
    if (arg) {
        const c = 'see ya!'; 
        console.log(a); 
        console.log(b);
    } 
}
// Answer:
// c: 'c is not defined' b: "bye" a: "hi"
