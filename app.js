//     const timeRightNow = () => {
//      const now = new Date();
//      return console.log(now);
//  }

let clockSection =  document.querySelector('h1');
let timeIs = new Date();

    console.log(timeIs);
    console.log('Hurray');

let word = 'Hello World';
clockSection.innerHTML = `${timeIs}`;