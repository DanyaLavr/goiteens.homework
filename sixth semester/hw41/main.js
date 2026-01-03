"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age;
let nameUser;
let toggle;
let empty;
let notInitialize;
let callback;
age = 50;
nameUser = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
    return 100 + a;
};
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string")
    str = some;
let person;
person = ["Max", 21];
var Status;
(function (Status) {
    Status[Status["READY"] = 0] = "READY";
    Status[Status["LOADING"] = 1] = "LOADING";
})(Status || (Status = {}));
let strOrNumL;
let literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=main.js.map