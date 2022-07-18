/*Задание Напишете програма, която познава дали е топло или студено навън. 
От конзолата се чете един ред – текст, който подсказва какво е времето. 
При въвеждане на "sunny" трябва да се отпечата "It's warm outside!". Във 
всички останали случаи трябва да се отпечата "It's cold outside!". */ 
// вход: sunny cloudy snowy 
function daliVali(input){ 
    let vreme = input[0]; 
    if (vreme == 'sunny'){
        console.log('Its warm outside!');
    } else if (vreme == 'cloudy'){
        console.log('It is cloudy outside!');
    } else if (vreme == 'cold'){
        console.log('Its cold outside!');
    }else{
        console.log('Nepravilna stoinost');
    }

} 
daliVali(["sunny"]); 
// ами май стана с if i else if конструкцията г/д извежда някви резултати 
// стана е , сложих му накрая и else ако е въведена различна стойност от зададените и дава 
// съобщение, че е въведена неправилна стойност