let myname="abhijith";
let checkname=new Promise((reslove,reject)=>{
   const name_list=['abhijith','raj','ramesh','suresh','ganesh']
   if(name_list.includes(myname)){
       reslove(`your name found at index :${name_list.indexOf(myname)}`)
   }
   else{
       reject("Err : your name is not found")
   }
})

checkname.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})