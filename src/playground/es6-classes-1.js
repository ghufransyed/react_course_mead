

class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year${this.age == 1 ? '' : 's'} old`;
    }
}


class Student extends Person {
   constructor(name, age, major) {
       super(name, age);
       this.major = major;
   }

  getDescription() {
      let description = super.getDescription();
      if (this.hasMajor()) {
          description +=  ` Their major is ${this.major}`
      }
      return description;
  }

    hasMajor() {
       return !!this.major;
   }
}

class Traveller extends Person{
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()){
            greeting += ` I am visiting from ${this.homeLocation}.`;
        } 
        return greeting
    }
    
    hasHomeLocation() {
        return !!this.homeLocation;
    }

}

const me = new Traveller('ghufran', 47, 'Menlo Park');
const other = new Traveller();

console.log(me.getGreeting());
console.log(other.getGreeting());

