function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppingArr = [];
}

Hamburger.prototype.addTopping = function (topping) {
    return this.toppingArr.push(topping);
}

Hamburger.prototype.calculateCalories = function () {
   return this.size.calories
                + this.stuffing.calories
                + this.toppingArr.reduce((sum, current) => sum + current.calories ,0);
}

Hamburger.prototype.calculatePrice = function () {
    return this.size.price
                + this.stuffing.price
                + this.toppingArr.reduce((sum,current) => sum + current.price ,0)
}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20
}
Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40
}
Hamburger.STUFFING_CHEESE = {
    price: 10,
    calories: 20
}
Hamburger.SALAT = {
    price: 20,
    calories: 5
}
Hamburger.POTATO = {
    price: 15,
    calories: 10
}
Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5
}
Hamburger.TOPPING_SAUCE = {
    price: 15,
    calories: 0
}


const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log('Calories:' + hamburger.calculateCalories());
console.log('Price:' + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log('Price with sauce:' + hamburger.calculatePrice());



