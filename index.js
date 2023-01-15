// Code your solutions in this file

function writeCards(arrayOfNames, event = "birthday") {
    let arrayOfGreeting = [];
  
    for (let name of arrayOfNames) {
      arrayOfGreeting.push(
        `Thank you, ${name}, for the wonderful ${event} gift!`
      );
    }
  
    return arrayOfGreeting;
  }
  
  let givenNames = ["Charlie", "Samip", "Ali"];
  writeCards(givenNames, "birthday");
  
  
  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
