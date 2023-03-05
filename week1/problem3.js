// - First-class function
function meowFrom (catBreed) {
    return `Meow from ${catBreed}!`;
}
const sayMeow = meowFrom;
console.log(sayMeow('Calico'));


// - Higher order function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const multiplyBy5 = multiplier(5);
console.log(multiplyBy5(10)); 


// - Callback function
function sendingLove(person, callback) {
    console.log("Sending Love to:", person);
    callback();
}

function sendingBack() {
    console.log("Sending back my love to you!");
}
sendingLove("Simon", sendingBack);
