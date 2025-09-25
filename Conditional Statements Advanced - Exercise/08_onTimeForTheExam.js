function examTime(examHour, examMinutes, arrivalHour, arrivalMinutes) {
    let examTotal = examHour * 60 + examMinutes;
    let arivalTotal = arrivalHour * 60 + arrivalMinutes;

    let diff = arivalTotal - examTotal;

    if (diff == 0) {
        console.log("On time");
    } else if (diff < 0) {
        let early = Math.abs(diff);
        if (early <= 30) {
            console.log("On time");
            console.log(`${early} minutes before the start`);
        } else if (early < 60) {
            console.log("Early");
            console.log(`${early} minutes before the start`);
        } else {
            let hours = Math.floor(early / 60);
            let minutes = early % 60;

            if (minutes < 10) {
                minutes = "0" + minutes
            }
            console.log("Early");
            console.log(`${hours}:${minutes} hours before the start`);
        }
    } else {
        let late = diff
        if (late < 60) {
            console.log("Late");
            console.log(`${late} minutes after the start`);
        } else {
            let hours = Math.floor(late / 60);
            let minutes = late % 60;

            if (minutes < 10) {
                minutes = "0" + minutes
            }
            console.log("Late");
            console.log(`${hours}:${minutes} hours after the start`);
        }
    }
}

