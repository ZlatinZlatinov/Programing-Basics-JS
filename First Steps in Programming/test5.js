// Съединяване на текст и число 
function dolepqne (input){
    let purvoIme = "John" ; 
    let lastName = "Cena " ; 
    let age = "45" ; 
    let result = purvoIme + " " + lastName + "@ " + age; 
    console.log(result); 

} 
dolepqne(); // конкатенация 
// може и така: 
// let a = 1.5;
// let b = 2.5; 
// let sum = "The sum is: " + a + b; 
// console.log(sum); 
// Ще изкара: The sum is: 1.52.5 
// ако искаме да ги събира/изважда трябва да ги декларираме като числа
// например let a = Number(input[0]); b = Number (input[1]); 
// let result = a+b ; console.log(result); ще искара пресметнатия резултат