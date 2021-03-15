class Company {
    constructor(name) {
      this.company_name = name;
    }
    parentShow(){
        return this.company_name 
    }
  }
  
class Role extends Company {
    constructor(name,role) {
      super(name);
      this.role = role;
    }
    show() {
      return `my company name is ${this.parentShow()} and my role is ${this.role}`
    }
  }
  
var e1=new Role("Datamatics","Software Trainee")
let dis= e1.show();
console.log(dis)