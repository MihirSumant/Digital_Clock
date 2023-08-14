 const timeRightNow = () => {
    
    const theTime = new Date();
    const hours = theTime.getHours();
    const mins = theTime.getMinutes();
    const seconds = theTime.getSeconds();

    const fixedSeconds = makeDoubleDigit(seconds);
    //console.log(fixedSeconds);
    const fixedMins = makeDoubleDigit(mins);
    const fixedHours = makeDoubleDigit(hours);

    let clockSection =  document.querySelector('h1');
    clockSection.innerHTML = `${fixedHours}:${fixedMins}:${fixedSeconds}`;
}

const makeDoubleDigit = (timeNumber) => {

    if(timeNumber < 10) {
        const numChar = timeNumber.toString();
        //console.log(`0${numChar}`);
        const fixedNum = `0${numChar}`;
        return fixedNum;
    }
    else {
        return timeNumber;
    }
         
}

timeRightNow();
setInterval(timeRightNow, 1000);