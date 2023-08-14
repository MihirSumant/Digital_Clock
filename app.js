 const timeRightNow = () => {
    
    const theTime = new Date();
    const hours = theTime.getHours();
    console.log(hours);
    const mins = theTime.getMinutes();
    console.log(mins);
    const seconds = theTime.getSeconds();
    console.log(seconds);

    let clockSection =  document.querySelector('h1');
    clockSection.innerHTML = `${hours}:${mins}:${seconds}`;
}

timeRightNow();
setInterval(timeRightNow, 1000);