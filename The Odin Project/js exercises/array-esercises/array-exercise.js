/* 
Translate border-left-width to borderLeftWidth

Write the function camelize(str) that changes dash-separated words like “my-short-string” 
into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

  return result[0] + result[1].charAt(0).toUpperCase() + result[1].slice(1);
      let otherLetters = result.map((x) => x.slice(1).toLowerCase());
      result[0].toLowerCase + 

P.S. Hint: use split to split the string into an array, transform it and join back. */


//my first attempt was working only for the "this-style" method
function camelize(str) {
    
    if (str[0] === '-') {
        //divide the argument in arrays
        let result = str.split('-');
        // the first letter of every array should be UpperCased
        let everyFirstUpper = result.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
        console.log(everyFirstUpper.join(''));
    }  else {
        //divide the argument in arrays
        let result = str.split('-');

        // the first letter of every array is UpperCased
        let everyFirstUpper = result.map((word) => word[0].toUpperCase() + word.slice(1));
        
        // need to lowerCase the first item of the arrey
        console.log(everyFirstUpper.join(''));
    }
}

//solution

function camelized(str) {
    return str
    .split('-')
    .map(
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}


/*
Filter range
importance: 4

Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

*/

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return arr.filter((num) => num >= a && num <= b);
}

let filtered = filterRange(arr, 1, 7);



