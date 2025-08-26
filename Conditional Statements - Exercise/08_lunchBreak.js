function lunchBreak(movieName, movieDuration, breakDuration) {
    let lunchTime = breakDuration / 8;
    let breakTime = breakDuration / 4;
    let timeLeft = breakDuration - lunchTime - breakTime;

    if (timeLeft >= movieDuration) {
        timeLeft -= movieDuration;
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        timeLeft -= movieDuration;
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(Math.abs(timeLeft))} more minutes.`);
    }
}

