/* Мими има закупени самолетни билети, но в последствие решава да си добави багаж към тях.
Таксите за багаж се изчисляват въз основа на теглото на чекирания багаж:
•	до 10кг – 20% от цената на багаж над 20кг
•	между 10кг и 20кг вкл. – 50% от цената на багаж над 20кг.
•	над 20кг – таксата се чете от конзолата
В зависимост от броя на дните, които остават до пътуването, цената се оскъпява:
•	повече от 30 дни - цената на багажа се оскъпява с 10%
•	между 7 и 30 дни вкл. - цената на багажа се оскъпява с 15%
•	по-малко от 7 дни - цената на багажа се оскъпява с 40%
Напишете програма, която пресмята колко ще трябва да заплати Мими, спрямо горните условия.
Вход:
От конзолата се четат 4 реда:
1.	Цената на багаж над 20кг - реално число в диапазона [10.0…80.0]
2.	Килограми на багажа – реално число в диапазона [1.0…32.0]
3.	Дни до пътуването – цяло число в диапазона [1…60]
4.	Брой багажи – цяло число в диапазона [1…10]
Изход
Да се отпечата на конзолата сумата, която ще трябва да заплати Мими за багажите, в следния формат:
•	" The total price of bags is: {цената на багажите} lv. "
Сумата да бъде форматирана до втората цифра след десетичния знак.
 */ 
function addbbags(input){
    let cenaBagajNad20lv = Number(input[0]); 
    let kgBagaj = Number(input[1]); 
    let dniPutuvane = Number(input[2]); 
    let bagsCount = Number(input[3]); 
    let taxes = 0;
    if (kgBagaj < 10){
        taxes = cenaBagajNad20lv * 0.2;
    } else if (kgBagaj >= 10 && kgBagaj <= 20){
        taxes = cenaBagajNad20lv * 0.5; 
    } else if (kgBagaj > 20){
         taxes = cenaBagajNad20lv;
    } 
    if (dniPutuvane > 30){
        taxes *= 1.1;
    } else if (dniPutuvane >= 7 && dniPutuvane <=30){
        taxes *= 1.15; 
    } else if (dniPutuvane < 7){
        taxes *= 1.4;
    } 
    let finalPrice = taxes * bagsCount; 
    console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);
    
} 
addbbags(["30" , "18" , "15" , "2"]); 
addbbags(["25.50" , "5" , "36" , "6"]); 
addbbags(["63.80" , "23" , "3" , "1"]); // 100/100 eeezzz wee