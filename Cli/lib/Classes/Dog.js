import { Animal } from './Animal.js';

export class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'Dog', status);

    this.master = master;
  }

  greetMaster() {
    return `Hello ${ this.master }`;
  }
}