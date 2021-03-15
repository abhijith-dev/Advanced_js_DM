let count=0
let timer=setInterval(() => {
   console.log(`Count :${++count}`)
   if(count===10){
       clearInterval(timer)
   }
},1000);

setTimeout(() => {
    console.log("this statement is running after 3 sec")
}, 3000);