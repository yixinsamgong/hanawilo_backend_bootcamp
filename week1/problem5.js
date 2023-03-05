const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function logArrayUsingForLoop(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
logArrayUsingForLoop(someArray)

function logArrayUsingForOfLoop(arr){
    for (const num of arr) {
        console.log(num);
    }
}
logArrayUsingForOfLoop(someArray)
