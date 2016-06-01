import { Animal } from './Animal.js';

export class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return super.introduce() + '  Meow meow!';
  }
}
