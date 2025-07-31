function swimmingRecord(record, distance, swimmingTime) {
    let timeForSwim = distance * swimmingTime;
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = timeForSwim + delay;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        totalTime -= record;
        console.log(`No, he failed! He was ${totalTime.toFixed(2)} seconds slower.`)
    }

}

