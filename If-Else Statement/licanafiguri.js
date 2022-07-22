/* Зад.7 Лица на Фигури Задание: Да се напише функция,  която получава като вида и размерите на 
геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), 
кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата 
(текст със следните възможности: square, rectangle, circle или triangle). 
•	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
•	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на 
страните му
•	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
•	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на 
страната му и дължината на височината към нея
Резултатът да се закръгли до 3 цифри след десетичната запетая. 
 */ 
function licata(input){ 
    let figura = input[0]; 
    let stranaA = Number(input[1]); 
    let stranaB = Number(input[2]); 
    let lice = 0; 
    if (figura === 'square'){
        lice = stranaA**2; 
        console.log(lice.toFixed(3));
    } else if ( figura === 'rectangle'){
        lice = stranaA*stranaB; 
        console.log(lice.toFixed(3)); 
    } else if ( figura === 'circle'){
        lice = Math.PI* stranaA**2; 
        console.log(lice.toFixed(3));
    } else if (figura === 'triangle'){
        lice = stranaA*stranaB/2 
        console.log(lice.toFixed(3));
    } 

} 
licata(["triangle" , "4.5" , "20"]); 
// уж работи с примерния вход от задачата, не е тествана в жъж 
// 100/100 даде малко тикчета, тряа видя ако решавана в клипа