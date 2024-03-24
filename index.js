// Write your solution here!
const cats = ['Milo','Otis','Garfield'];
//let catsLength = cats.length;
//console.log(catsLength);
//append means add(destructively add to the end of an array we use push)
function destructivelyAppendCat(Ralph){
    cats.push('Ralph');
    return cats;
}
//append means add(destructively add to the end of an array we use unshift)
function destructivelyPrependCat(Bob){
    cats.unshift('Bob');
    return cats;

}
// to destructively remove the last element from the end of an array we use pop.
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

// to destructively remove the 1st element from the beginnning of an array we use shift.
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
 // we use the spread operator[...] to copy the original array.
 function appendCat(name){
return[...cats,'Broom'];  
 }

 // we use the spread operator [...] to copy the original array.
 function prependCat(name){
    return ['Arnold',...cats];
 }

 //we use .slice to take out the last cat from the  array.
 function removeLastCat(){
    return cats.slice(0,cats.length -1)
 }
 removeLastCat();

 //we use.slice to take out the first cat from the  array.
 function removeFirstCat(){
    return cats.slice(1,cats.length)
 }
 removeFirstCat();