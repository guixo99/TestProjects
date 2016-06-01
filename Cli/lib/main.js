import { Animal } from './Classes/Animal';
import { Shark } from './Classes/Shark';
import { Cat } from './Classes/Cat';
import { Dog } from './Classes/Dog';

(function () {
  function init() {
    var billy = new Shark("Billy", 3, "Alive and well");
    var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
    var doug = new Dog("Doug", 12, "Serving his master", "Eliza");

    //Print Objects
    console.log(billy);
    console.log(cathy);
    console.log(doug);

    //print greetings
    console.log(billy.introduce());
    console.log(cathy.introduce());
    console.log(doug.introduce());
    console.log(doug.greetMaster());

    //Errors
    console.log(billy.greetMaster());
  }

  init();
})();