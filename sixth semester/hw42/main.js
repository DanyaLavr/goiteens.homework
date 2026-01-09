var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Key = /** @class */ (function () {
    function Key() {
        this.signature = Math.floor(Math.random() * 10);
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
    }
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var House = /** @class */ (function () {
    function House(key) {
        this.door = "close";
        this.tenants = [];
        this.key = key;
    }
    House.prototype.comeIn = function (person) {
        if (this.door === "open")
            this.tenants.push(person);
    };
    return House;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse(key) {
        return _super.call(this, key) || this;
    }
    MyHouse.prototype.toggleDoor = function (key) {
        if (this.key.getSignature() === key.getSignature()) {
            switch (this.door) {
                case "close":
                    this.door = "open";
                    break;
                case "open":
                    this.door = "close";
                    break;
                default:
                    this.door = this.door;
            }
        }
    };
    return MyHouse;
}(House));
var key = new Key();
var person = new Person(key);
var myHouse = new MyHouse(key);
myHouse.toggleDoor(person.getKey());
myHouse.comeIn(person);
console.log("myHouse :>> ", myHouse);
