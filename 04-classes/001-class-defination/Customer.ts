class Customer {

    // firstName: string;
    // lastName: string;

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public getFirstName(): string {
        return this._firstName;
    }

    public setFirstName(theFirst: string): void {
        this._firstName = theFirst;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

let customer = new Customer("Min", "Naing");

customer.setFirstName("Mya");
customer.lastName = "Mya";

console.log(`${customer.getFirstName()} ${customer.lastName}`);

// console.log(customer.firstName);
// console.log(customer.lastName);
