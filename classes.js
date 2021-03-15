class Person{

    constructor(name,age,company,salary){
        this.name=name;
        this.age=age;
        this.company=company
        this.salary=salary
    }
   show(){
        console.log(`Name:${this.name} Age:${this.age} Comapany:${this.company} Salary:${this.salary}`)
    }
}

var p1=new Person('raj',28,'datamatics',22000)

p1.show();

var p2=new Person('ramesh',45,'datamatics',28000)

p2.show();