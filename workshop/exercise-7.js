// Q7
// Write a loop that will output every hour of the day (0 to 23) and
// determine whether it is time to sleep, eat or train.
// Life in the army is regimented! These are the hours alloted to each activity.
// Sleep between 22h and 5h
// Eat at 7h, 13h and 18h
// The rest of the time is spent training.

// The output should look something like
// It's 11h. Time to train!
// It's 12h. Time to train!
// It's 13h. Time to eat!

for (let hour=0; hour<24; hour++) {
    let txt = `It's ${hour}h. Time to `
    if (hour >= 22 || hour < 5) {
        console.log(`${txt}sleep!`);
    } else if (hour == 7 || hour == 13 || hour == 18) {
        console.log(`${txt}eat!`)
    } else {
        console.log(`${txt}train!`)
    }
}