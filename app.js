let is24HourFormat = true;
let AMOrPM = '';
let switcher = document.getElementById('switcher');

switcher.onclick = () => {

        if(is24HourFormat){
            switcher.textContent = "Switch to 24 Hour Format";
            is24HourFormat = false;
        }
        else {
            switcher.textContent = "Switch to A.M.-P.M.";
            is24HourFormat = true;            
        }
    };


 const timeRightNow = () => {
    
    const theTime = new Date();
    const hours = theTime.getHours();
    const mins = theTime.getMinutes();
    const seconds = theTime.getSeconds();

    let hoursInAMPM = 0;

    if(!is24HourFormat){
        hours>12 ? AMOrPM = 'P.M.' : AMOrPM = 'A.M.';
        hoursInAMPM = Math.abs(hours - 12); 
    }
        
    const fixedSeconds = makeDoubleDigit(seconds);
    const fixedMins = makeDoubleDigit(mins);
    const fixedHours = makeDoubleDigit(hours);
    const fixedHoursAMPM = makeDoubleDigit(hoursInAMPM);

    let clockSection =  document.querySelector('h1');

    if(is24HourFormat){
        clockSection.innerHTML = `${fixedHours}:${fixedMins}:${fixedSeconds}`;
    }
    else{
        clockSection.innerHTML = `${fixedHoursAMPM}:${fixedMins}:${fixedSeconds} ${AMOrPM}`;
    }
    
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