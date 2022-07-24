// функция приема число в интервала 100 - 200 ако е в интервала не отпечатва нищо ако е извън не го invalid и 
// и 0 също трябва да не отпечатва ... логическо отрицание ! - проверява дали не е изпълнено дадено условие 
function isValido(input){
let chislo = Number(input[0]); 
let isValid = (chislo >= 100) && (chislo <= 200) || (chislo == 0); 
if(!isValid){
    console.log("invalid"); 

} 
} 
isValido(["33"]); 
// 80/100 <= за да е в диапазона '' 100/100 2nd try