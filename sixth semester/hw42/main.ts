class Key {
  private signature: number;
  constructor() {
    this.signature = Math.floor(Math.random() * 10);
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}
class House {
  door: "open" | "close" = "close";
  key: Key;
  tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person) {
    if (this.door === "open") this.tenants.push(person);
  }
}
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  toggleDoor(key: Key) {
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
  }
}

const key = new Key();
const person = new Person(key);
const myHouse = new MyHouse(key);

myHouse.toggleDoor(person.getKey());
myHouse.comeIn(person);

console.log("myHouse :>> ", myHouse);
