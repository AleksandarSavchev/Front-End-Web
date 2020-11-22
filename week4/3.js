class Item {
    constructor(name, disc) {
        this.name = name;
        this.disc = disc;
    }   
}
Item.price = 1000;
Item.prototype.get = () => (console.log(Item.price));

let rice = new Item("rice", 10);
rice.applyDisc = function() {
    console.log(Item.price * ((100 - this.disc)/ 100));
}
rice.get();
rice.applyDisc();