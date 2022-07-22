/*Зад.5 Задание: Да се напише функция, която получава цяло число и проверява дали е под 100, 
между 100 и 200 или над 200. Ако числото е:
•	под 100 отпечатайте: "Less than 100"
•	между 100 и 200 отпечатайте: "Between 100 and 200"
•	над 200 отпечатайте: "Greater than 200"
*/ 
// вход 95 ; Less than 100
function chisloSto(input){ 
    let chislo = Number(input[0]); 
    if (chislo < 100){
        console.log(`Less than 100`);
    } else if ( chislo <= 200){
        console.log(`Between 100 and 200`); 
    }else  if ( chislo > 200){
        console.log(`Greater than 200`);
    }
     
} 
chisloSto(["85"]); 

// май уж работи, не е тествано в жъж, си тяа е с другите кавички да видим... чч 
// 1st try 90/100 more interesting xdd 
// 2nd try трябвало да е <=200  за да е between 100 and 200 ; 100/100 dade