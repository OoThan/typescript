"use strict";
var Customer4 = /** @class */ (function () {
    function Customer4(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer4.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer4.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer4;
}());
var customer4 = new Customer4("Martin", "Dixon");
console.log("".concat(customer4.firstName, " ").concat(customer4.lastName));
