/* Атанас решава да прекара отпуската си в Банско и да кара ски. Преди да отиде обаче, трябва да 
резервира хотел и да изчисли колко ще му струва престоя. Налични са следните видове помещения, със 
следните цени за престой:
	"room for one person" – 18.00 лв за нощувка
	"apartment" – 25.00 лв за нощувка 
	"president apartment" – 35.00 лв за нощувка
Според броят на дните, в които ще остане в хотела (пример: 11 дни = 10 нощувки) и видът на помещението, 
което ще избере, той може да ползва различно намаление. 
След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) . 
Ако оценката му е позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от нея. 
Ако оценката му е негативна приспада от цената 10%.
Вход
Входът се чете от конзолата и се състои от три реда:
•	Първи ред - дни за престой - цяло число в интервала [0...365]
•	Втори ред - вид помещение - "room for one person", "apartment" или "president apartment"
•	Трети ред - оценка - "positive"  или "negative"
Изход
На конзолата трябва да се отпечата един ред:
•	Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая.
 */ 
function banskoBorovec (input){
    let dniPrestoi = Number(input[0]); 
    let pomeshtenie = input[1]; 
    let score = input[2]; 
    const noshtuvki = dniPrestoi - 1;
    const roomOnePerson = 18 * noshtuvki ; 
    const apartment = 25 * noshtuvki; 
    const presidentApt = 35 * noshtuvki; 
    let totalCost = 0; 

   switch(pomeshtenie){
    case "room for one person" : 
    totalCost = roomOnePerson; break; 
    case "apartment" : 
    if (dniPrestoi < 10){
        totalCost = apartment * 0.70;
    } else if(dniPrestoi >= 10 && dniPrestoi <= 15){
        totalCost = apartment * 0.65; 
    } else if(dniPrestoi > 15){
        totalCost = apartment * 0.50; 
    } 
    break; 
    case "president apartment" : 
    if (dniPrestoi < 10){
        totalCost = presidentApt * 0.90;
    } else if(dniPrestoi >= 10 && dniPrestoi <= 15){
        totalCost = presidentApt * 0.85; 
    } else if(dniPrestoi > 15){
        totalCost = presidentApt * 0.80; 
    } 
    break; 
    }  
    switch(score){
        case "positive" : 
        totalCost *= 1.25; 
        break; 
        case "negative" : 
        totalCost *= 0.90; 
    } 
    console.log(`${totalCost.toFixed(2)}`);
} 
banskoBorovec (["14","apartment","positive"]); 
banskoBorovec (["30","president apartment","negative"]); 
banskoBorovec (["12","room for one person","positive"]);
// 100/100 1st try LMAO

