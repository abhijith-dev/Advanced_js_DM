let x=5;//global
let G=6
function squre(){
   FG=15;
   FG=FG*FG;
   let x=10//local
   x=x*x;
   console.log(x)//local
   G=G*G;
}
squre()
console.log(x)//global
console.log(G)//global
console.log(FG)//global