let promise=new Promise((reslove,reject)=>{
    const animals=['dog','cat','tiger','deer','elephant','lion']
    if(animals.length){
        reslove(animals)
    }
    else{
        reject("Err while fetching data....");
    }
 })

async function fetchAnimalName(){
    await promise.then(res=>{
       console.log(res)
    }) 
    .catch(err=>{
         console.log(err)
    })
    console.log("fetching process is done...")
 }
 fetchAnimalName();