// функция да проверява число дали е в интервала от -100 до 100 и е различно от 0 
function interval(input){
    let chislo = Number(input[0]); 
    if(chislo >= -100  && chislo != 0 && chislo <= 100){
        console.log("Chisloto e v zadadeniq interval"); 

    } else{
        console.log("Chisloto e izvun zadadeniq interval"); 
    }
} 
interval(["-50"]); 
// Na console log trqa da e s Yes ili No 
// 100/100 wee