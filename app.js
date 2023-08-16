let is24HourFormat = true;
let AMOrPM = '';

 const timeRightNow = () => {
    
    const theTime = new Date();
    const hours = theTime.getHours();
    const mins = theTime.getMinutes();
    const seconds = theTime.getSeconds();

    let hoursInAMPM = Math.abs(hours - 12);

    if(!is24HourFormat){
        hours>12 ? AMOrPM = 'P.M.' : AMOrPM = 'A.M.';
        //console.log(AMOrPM); 
    }
    
    let switcher = document.getElementById('switcher');
    switcher.addEventListener('click', () => {

        
        if(is24HourFormat){
            switcher.textContent = "Switch to 24 Hour Format";
            is24HourFormat = false;
        }
        else {
            switcher.textContent = "Switch to A.M.-P.M.";
            is24HourFormat = true;
            hours>12 ? AMOrPM = 'P.M.' : AMOrPM = 'A.M.';
            //console.log(AMOrPM);            
        }
    });

    const fixedSeconds = makeDoubleDigit(seconds);
    //console.log(fixedSeconds);
    const fixedMins = makeDoubleDigit(mins);
    const fixedHours = makeDoubleDigit(hours);
    const fixedHoursAMPM = makeDoubleDigit(hoursInAMPM);
    //console.log(fixedHours);

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