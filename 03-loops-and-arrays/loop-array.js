var reviews = [2, 34.5, 70., 4, 7, 0];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Reviews average = ".concat(average));
// String array
var sportOne = ["Golf", "Cricket", "Tennis", "Swimming"];
sportOne.push("Football");
sportOne.push("Baseball");
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var sport = sportOne_1[_i];
    if (sport == "Cricket")
        console.log("".concat(sport, " << my favorite!"));
    else
        console.log(sport);
}
