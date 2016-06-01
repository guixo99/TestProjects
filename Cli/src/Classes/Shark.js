import {Animal} from './Animal.js';

export class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
  }
}