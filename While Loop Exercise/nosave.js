function dishwasher(input) {
    const bottleOfDetergents = Number(input[0]);
    const coveragePerBottle = 750;
    const totalCoverageOfDetergents = bottleOfDetergents * coveragePerBottle;
    const neededDetergentsPerPlate = 5;
    const neededDetergentsPerPot = 15;
 
    let index = 1;
    let command = input[index];
    index++;
 
    let counterDishes = 0;
    let counterPots = 0;
    let usedDetergent = 0;
    let countUsedDetergent = 0;
    let counterLoops = 0;
 
    while (command !== "End") {
        counterLoops++;
        let dishes = Number(command);
        if (counterLoops % 3 === 0) {
            usedDetergent = dishes * neededDetergentsPerPot;
            countUsedDetergent += usedDetergent;
            counterPots += dishes;
        } else {
            usedDetergent = dishes * neededDetergentsPerPlate;
            countUsedDetergent += usedDetergent;
            counterDishes += dishes;
        }
        if (countUsedDetergent > totalCoverageOfDetergents) {
            break;
        }
        command = input[index];
        index++;
    }
    let difference = Math.abs(totalCoverageOfDetergents - countUsedDetergent);
    if (countUsedDetergent > totalCoverageOfDetergents) {
        console.log(`Not enough detergent, ${difference} ml. more necessary!`);
    } else {
        console.log("Detergent was enough!");
        console.log(`${counterDishes} dishes and ${counterPots} pots were washed.`);
        console.log(`Leftover detergent ${difference} ml.`);
    }
} 
trollere(["2" , "53" , "65" , "55", "End"]); // e tva dava 100/100
trollere(["1" , "10" , "15" , "10" , "12" , "13" , "30"]);