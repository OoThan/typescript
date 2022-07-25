let reviews: number[] = [2, 34.5, 70., 4, 7, 0];
let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total / reviews.length;

console.log(`Reviews average = ${average}`);

// String array
let sportOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

sportOne.push("Football");
sportOne.push("Baseball");

for (let sport of sportOne) {
    if (sport == "Cricket")
        console.log(`${sport} << my favorite!`);
    else
        console.log(sport);
}