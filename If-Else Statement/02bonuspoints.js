/* Зад.2 Задание: Дадено е цяло число – начален брой точки. Върху него се начисляват бонус точки по 
правилата, описани по-долу. Да се напише функция, която пресмята бонус точките, които получава 
числото и общия брой точки (числото + бонуса).
•	Ако числото е до 100 включително, бонус точките са 5.
•	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
•	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

•	Допълнителни бонус точки (начисляват се отделно от предходните):
o	За четно число  + 1 т.
o	За число, което завършва на 5  + 2 т.
*/ // вход: 20 ; 175 
function bonusPoints(input){
    let nachalenBroi = Number(input[0]); 
    let bonus = 0;
    if (nachalenBroi <= 100){
        bonus = 5;
    } else if (nachalenBroi <= 1000){
        bonus = nachalenBroi*0.2;
    } else  {
        bonus = nachalenBroi*0.1; 
    } 
    if (nachalenBroi % 2 == 0){
        bonus += 1;
    } else if (nachalenBroi % 10 == 5){
        bonus += 2;
    }

    console.log(bonus); 
    console.log(nachalenBroi + bonus); 
} 
bonusPoints(["15875"]); 
// стаа ама cheated ... нш не разбрах как го смята хдд