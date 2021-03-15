//hoistings
num=10;
console.log(num); 
var num;

//prototypes
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
let p1=new Person('abhijith','shetty',22)
Person.prototype.company="datamatics"
console.log(`Name:${p1.firstName}, Company:${p1.company}`)
//call
const emp={
    show:function(sal){
        return `my company is ${this.c_name} and my role is ${this.role} with salary ${sal}`
    }
}
let emp1={
    c_name:"ITC",
    role:"software testing"
}
let emp2={
    c_name:"TCS",
    role:"software developer"
}
let res1=emp.show.call(emp1,17000)
console.log(res1)

let res2=emp.show.call(emp2,18000)
console.log(res2)

//apply
const empN={
    show:function(sal,loc){
        return `my company is ${this.c_name} and my role is ${this.role} with salary ${sal},company location :${loc}`
    }
}
let empn1={
    c_name:"ITC",
    role:"software testing"
}

let resn1=empN.show.apply(empn1,[17000,'bangalore'])
console.log(resn1)
