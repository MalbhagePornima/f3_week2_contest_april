function OpeningCeremony(callback) {
    setTimeout(() => {
        console.log("Let the games begin");
        const initialScores = { red: 0, blue: 0, green: 0, yellow: 0 };
        callback(initialScores, Race100M);
    }, 1000);
}

function Race100M(scores, callback) {
    setTimeout(() => {
        const randomTimes = {
            red: getRandomTime(),
            blue: getRandomTime(),
            green: getRandomTime(),
            yellow: getRandomTime(),
        };

        const sortedColors = Object.keys(randomTimes).sort((a, b) => randomTimes[a] - randomTimes[b]);
        scores[sortedColors[0]] += 50;
        scores[sortedColors[1]] += 25;

        console.log("Race100M results:", randomTimes);
        console.log("Updated scores:", scores);

        callback(scores, LongJump);
    }, 3000);
}

function LongJump(scores, callback) {
    setTimeout(() => {
        const colors = ["red", "yellow", "green", "blue"];
        const selectedColor = colors[Math.floor(Math.random() * colors.length)];
        scores[selectedColor] += 150;

        console.log(`LongJump: ${selectedColor} gets 150 points`);
        console.log("Updated scores:", scores);

        callback(scores, HighJump);
    }, 2000);
}

function HighJump(scores, callback) {
    // Implement HighJump logic here (if needed)
    // ...

    // For demonstration purposes, let's assume no points are awarded in HighJump.
    console.log("HighJump: No points awarded");
    console.log("Updated scores:", scores);

    callback(scores, AwardCeremony);
}
function AwardCeremony(scores) {
    const sortedColors = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    console.log(`Award Ceremony! Final scores:`);
    sortedColors.forEach((color, index) => {
        console.log(`${color.charAt(0).toUpperCase() + color.slice(1)} came ${getOrdinal(index + 1)} with ${scores[color]} points.`);
    });
}

function getRandomTime() {
    return Math.floor(Math.random() * 6) + 10; // Random time between 10 and 15 seconds
}

function getOrdinal(number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder = number % 10;
    const suffix = suffixes[remainder] || suffixes[0];
    return `${number}${suffix}`;
}

// Start the Sports Day!
OpeningCeremony(Race100M);