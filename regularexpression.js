const str="hello world welcome to datamatics !"

//search
 let res1=str.search(/welcome/i);

 console.log("Starting word at index :"+res1)

 //replace
 let res2=str.replace(/hello/i,'hii');

 console.log(res2)

//test 
//1)
let pattern1=/e/
console.log(pattern1.test(str))

//2)
let pattern2=/[0-9]/
console.log(pattern2.test(str))

//3)
let pattern3=/[a-z]/
console.log(pattern3.test(str))

//4)
let pattern4=/[^0-9]/
console.log(pattern4.test(str))

//5)
let pattern5=/(x|y)/
console.log(pattern5.test(str))
