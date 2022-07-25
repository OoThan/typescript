var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this._firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this._firstName = theFirst;
    };
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var customer = new Customer("Min", "Naing");
customer.setFirstName("Mya");
customer.lastName = "Mya";
console.log("".concat(customer.getFirstName(), " ").concat(customer.lastName));
// console.log(customer.firstName);
// console.log(customer.lastName);
