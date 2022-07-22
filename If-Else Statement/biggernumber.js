/*Зад.2 Задание: Да се напише функция, която получава две цели числа и отпечатва по-голямото от 2те*/ 
function numComparison(input){
    let firstNum = Number(input[0]); 
    let secondNum = Number(input[1]); 
    if (firstNum > secondNum){
        console.log(firstNum); 
    } else {
        console.log(secondNum);
    }
} 
numComparison(["5" , "7"]); 
// и това нещо такова не съм я пускал в жъж 
// 100/100 минава , дава и хубави тикчета