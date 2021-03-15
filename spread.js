let animals=['dog','cat','tiger','deer','elephant','lion'];
//spread operator
let all_animals=[...animals];
console.log(all_animals)

//rest parameter
function cal(...parms){
   let sum=0;
   console.log(parms)
   for(let num in parms){
      sum+=parseInt(num)
   }
   return sum
}

let sum=cal(1,2,3,4,5,6);
console.log(sum)

//rest parameter
function calfirsttwoparmas(a1,a2,...parms){
    return parseInt(a1)+parseInt(a2)
 }
 
 let sum1=calfirsttwoparmas(1,2,3,4,5,6);
 console.log(sum1)