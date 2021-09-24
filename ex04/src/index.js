// Only change code below this line
function sumFibonacci(num){
    // ova dva uslova su zbog toga što fibonaci fiksno ima dva pocetna clana
    if(num<1) return 0;
    if(num === 1) return 1;

    var arr = [1];
    var n = 1, suma = 1;
    while(n<=num){
        arr.push(n);
        if(n%2==1){
            suma += n;
        } 
        n = arr[arr.length-1]+arr[arr.length-2];             
    }

    return suma;
    // mogli smo uraditi i pomocu dva broja pri cemu je jedan uvijek veci a drugi manji uz pomoc dodatne varijable
}
// Only change code above this line

console.log(sumFibonacci(10));
module.exports = sumFibonacci;