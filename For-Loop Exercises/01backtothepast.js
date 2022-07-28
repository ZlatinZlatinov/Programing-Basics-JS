/* Иванчо е на 18 години и получава наследство, което се състои от X сума пари и машина на времето. 
Той решава да се върне до 1800 година, но не знае дали парите ще са достатъчни, за да живее без да работи. 
Напишете програма, която пресмята, дали Иванчо ще има достатъчно пари, за да не се налага да работи до 
дадена година включително. Като приемем, че за всяка четна (1800, 1802 и т.н.) година ще харчи 12 000 лева. 
За всяка нечетна (1801,1803  и т.н.) ще харчи 12 000 + 50 * [годините, които е навършил през дадената година]. 
*/ 
function timetravel(input){ 
    let money = Number(input[0]); 
    let yearToLive = Number(input[1]);  
    let moneyLeft = 0;
    const startYear = 1800;  let age = 18;//let age = 22; 
    for(let i = startYear; i <= yearToLive; i++){
        if (i % 2 ===0){
            moneyLeft += 12000; 
            age ++;
        } else if ( i % 2 != 0){
           // let age = 18 + (i - startYear); 
            moneyLeft += 12000 + 50 * age; 
            age++;
        }
    } 
    let diff = Math.abs(money - moneyLeft);
    if (money >= moneyLeft){
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
    } else{
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }
} 
timetravel (["50000" , "1802"]); // 1st try 40/100 not bad;  4th try 60 / 100 we gettin better
timetravel (["100000.15" , "1808"]); // 5th try nad cheat from fb 100/100 xdd