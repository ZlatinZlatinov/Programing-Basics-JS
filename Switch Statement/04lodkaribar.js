/*Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, 
че решават да отидат на риболов с кораб. Цената за наемане на кораба зависи от сезона и броя рибари.
Цената зависи от сезона:
•	Цената за наем на кораба през пролетта е  3000 лв.
•	Цената за наем на кораба през лятото и есента е  4200 лв.
•	Цената за наем на кораба през зимата е  2600 лв.
В зависимост от броя си групата ползва отстъпка:
•	Ако групата е до 6 човека включително  –  отстъпка от 10%.
•	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
•	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат 
допълнителна отстъпка. 
Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 
Вход
Приемат се 3 аргумента:
•	Бюджет на групата – цяло число в интервала [1…8000]
•	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
•	Брой рибари – цяло число в интервала [4…18]
Изход
Да се отпечата на конзолата един ред:
•	Ако бюджетът е достатъчен:
"Yes! You have {останалите пари} leva left."
•	Ако бюджетът НЕ Е достатъчен:
"Not enough money! You need {сумата, която не достига} leva."
Сумите трябва да са форматирани с точност до два знака след десетичната запетая.
*/ 
function ribnaFiesta(input){
    let budget = Number(input[0]); 
    let season = input[1]; 
    let fishermanCount = Number(input[2]); 
    const shipPriceSpring = 3000; 
    const shipPriceSummer = 4200; 
    const shipPriceWinter = 2600; 
    let finalPrice = 0;
    if (fishermanCount > 0 && fishermanCount <= 6 && fishermanCount % 2 == 0){ 
        switch(season){
            case 'Spring' : 
            finalPrice = (shipPriceSpring * 0.85).toFixed(2); break; 
            case 'Summer' : 
            finalPrice = (shipPriceSummer * 0.85).toFixed(2); break; 
            case 'Autumn' : 
            finalPrice = (shipPriceSummer * 0.9).toFixed(2); break; 
            case 'Winter' : 
            finalPrice = (shipPriceWinter * 0.85).toFixed(2); break;  
            default : 
            break;
        } 
    } else if (fishermanCount > 0 && fishermanCount <= 6 && fishermanCount % 2 > 0){
        switch(season){
            case 'Spring' : 
            finalPrice = (shipPriceSpring * 0.90).toFixed(2); break; 
            case 'Summer' : 
            finalPrice = (shipPriceSummer * 0.90).toFixed(2); break; 
            case 'Autumn' : 
            finalPrice = (shipPriceSummer * 0.90).toFixed(2); break; 
            case 'Winter' : 
            finalPrice = (shipPriceWinter * 0.90).toFixed(2); break; 
            default : 
            break; 
        } 
    } 
    if (fishermanCount > 6 && fishermanCount <= 11 && fishermanCount % 2 == 0){
        switch(season){
            case 'Spring' : 
            finalPrice = (shipPriceSpring * 0.80).toFixed(2); break; 
            case 'Summer' : 
            finalPrice = (shipPriceSummer * 0.80).toFixed(2); break; 
            case 'Autumn' : 
            finalPrice = (shipPriceSummer * 0.85).toFixed(2); break; 
            case 'Winter' : 
            finalPrice = (shipPriceWinter * 0.80).toFixed(2); break; 
            default : 
            break;
        } 
    } else if (fishermanCount > 6 && fishermanCount <= 11 && fishermanCount % 2 > 0){
        switch(season){
            case 'Spring' : 
            finalPrice = (shipPriceSpring * 0.85).toFixed(2); break; 
            case 'Summer' : 
            finalPrice = (shipPriceSummer * 0.85).toFixed(2); break; 
            case 'Autumn' : 
            finalPrice = (shipPriceSummer * 0.85).toFixed(2); break; 
            case 'Winter' : 
            finalPrice = (shipPriceWinter * 0.85).toFixed(2); break; 
            default : 
            break;
        } 
    } 
    if ( fishermanCount > 11 && fishermanCount % 2 == 0){
        switch(season){
            case 'Spring' : 
            finalPrice = (shipPriceSpring * 0.70).toFixed(2); break; 
            case 'Summer' : 
            finalPrice = (shipPriceSummer * 0.70).toFixed(2); break; 
            case 'Autumn' : 
            finalPrice = (shipPriceSummer * 0.75).toFixed(2); break; 
            case 'Winter' : 
            finalPrice = (shipPriceWinter * 0.70).toFixed(2); break; 
            default : 
            break; 
        } 
    } else  if ( fishermanCount > 11 && fishermanCount % 2 > 0){
        switch(season){
            case 'Spring' : 
            finalPrice = (shipPriceSpring * 0.75).toFixed(2); break; 
            case 'Summer' : 
            finalPrice = (shipPriceSummer * 0.75).toFixed(2); break; 
            case 'Autumn' : 
            finalPrice = (shipPriceSummer * 0.75).toFixed(2); break; 
            case 'Winter' : 
            finalPrice = (shipPriceWinter * 0.75).toFixed(2); break; 
            default : 
            break; 
        } 
    } 
    if (finalPrice <= budget){
        let resto = (budget - finalPrice).toFixed(2); 
        console.log(`Yes! You have ${resto} leva left.`);
    } else if ( finalPrice > budget){
        let nedostig = (finalPrice - budget).toFixed(2); 
        console.log(`Not enough money! You need ${nedostig} leva.`);
    } 


} // da ama 60/100 mnoo dulgo i hi4 ne e taka 
// vqrnoto reshenie e v asdas dokumenta
ribnaFiesta (["3000","Summer","0"]); 
ribnaFiesta (["3600","Autumn","5"]); 
ribnaFiesta (["2000","Winter","-1"]);

