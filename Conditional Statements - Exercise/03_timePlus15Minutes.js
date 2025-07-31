function time(hour, minutes) {
    let newHour;
    let newMinutes;

    if (minutes + 15 > 59) {
        newHour = hour + 1;
        newMinutes = (minutes + 15) - 60;
        if (newHour > 23) {
            newHour = 0;
        }
    } else {
        newHour = hour;
        newMinutes = minutes + 15;
    };

    if (newMinutes <= 9) {
        console.log(`${newHour}:0${newMinutes}`);
    } else {
        console.log(`${newHour}:${newMinutes}`);
    }

}
