class Person {
    constructor(_salary) {
        this.get = function() {
            return _salary;
        }
    }
};

let boy = new Person(1000);
console.log(boy._salary);
console.log(boy.get());