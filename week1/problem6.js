const someArray = [1, 2, 3, 4, 5];
// Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5]
    someArray.concat([ ]); 
    //Non-mutative

// Use the length property to return the length of the array
    someArray.length;
    //Non-mutative

// Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5]
    someArray.filter(num => num !== 3);
    //Non-mutative

// Use the find() method to find and return the value of 5.
    someArray.find(num => num === 5);
    //Non-mutative

// Use the slice() method to return back this array: [3, 4]
    someArray.slice(2, 4);
    //Non-mutative

// Use the splice() method to return back this array: [1, 2, 5]
    someArray.splice(2, 2);
    //Mutative

// Use the includes() method to return back TRUE when I pass in “4” into the includes method
    someArray.includes(4);
    //Non-mutative

// Use the indexOf() method to return back the index of the element “2”
    someArray.indexOf(2)
    //Non-mutative

// Use the isArray() method to return back TRUE when I pass in the array
    Array.isArray(someArray);
    //Non-mutative

// Use the join() method to return back: “1, 2, 3, 4, 5”
    someArray.join(', ');
    //Non-mutative

// Use the map() method to return back a new array: [2, 4, 6, 8, 10]
    someArray.map(element => element * 2);
    //Non-mutative

// Use the pop() method to return back a new array: [1, 2, 3, 4]
    someArray.pop();
    //Mutative

// Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6]
    someArray.push(6);
    //mutative

// Use the shift() method to return back a new array: [2, 3, 4, 5]
    someArray.shift();
    //Mutative

// Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5]
    someArray.unshift(0);
    //Mutative

// Sort this array [9, 1, 3, 5] to return from smallest to largest using the sort() method, should return: [1, 3, 5, 9]
    someArray.sort();
    //Mutative

// Use the reduce() method to return back the sum of all numbers in the array
    someArray.reduce((acc, curr) => acc + curr, 0);
    //Non-Mutative
