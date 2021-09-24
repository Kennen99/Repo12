// Only change code below this line
function rangeOfNumbers(startN,endN){
    if(startN>endN){
        return "The starting numbers will always be less than or equal to the ending number";
    }
    if(startN === endN){
        return [startN];
    } else {
        var arr = rangeOfNumbers(startN+1,endN);
        arr.unshift(startN);
        return arr;
    }
    
    return arr;
}
// Only change code above this line

console.log(rangeOfNumbers(3,2));
module.exports = rangeOfNumbers;