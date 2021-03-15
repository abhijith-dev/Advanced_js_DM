function showGreatestValueInArray(arr,callback){
    let max=-99999;
    for(let num of arr){
       if(num>max){
           max=num;
       }
    }
    callback(max)
}
showGreatestValueInArray([10,30,40,50,70,90,20],(res)=>{
    console.log(`maximum value is : ${res}`)
})