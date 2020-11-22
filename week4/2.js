class Person  {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Здравей ${this.name} от планетата ${Person.planet}`);
    }
};
Person.planet = "Земя";

let boy = new Person("pesho");
boy.greeting();