function workingHours(time, day) {
    const workingDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    if (workingDays.includes(day) && time >= 10 && time <= 18) {
        console.log("open");
    } else {
        console.log("closed");

    }
}

