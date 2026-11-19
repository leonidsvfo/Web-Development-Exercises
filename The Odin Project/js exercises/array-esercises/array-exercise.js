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

P.S. Hint: use split to split the string into an array, transform it and join back. */


//my first attempt was working only for the "this-style" method
function camelize(str){
    //divide the argument in arrays
	let result = str.split('-');
    // the first letter of every array should be UpperCased
    let words = result.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    return words;
}



