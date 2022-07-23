/* Хотел предлага 2 вида стаи: студио и апартамент. Напишете функция, която изчислява цената 
за целия престой за студио и апартамент. Цените зависят от месеца на престоя: 

Предлагат се и следните отстъпки:
•	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
•	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
•	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
•	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
Вход
Получават се 2 аргумента:
•	 месецът – May, June, July, August, September или October
•	броят на нощувките – цяло число в интервала [0 … 200]
Изход
Да се отпечатат на конзолата 2 реда:
•	На първия ред: “Apartment: {цена за целият престой} lv.”
•	На втория ред: “Studio: {цена за целият престой} lv.”
Цената за целия престой форматирана с точност до два знака след десетичната запетая.
(["May" , "15"]);
*/ 
function trumpHotel(input){
    let month = input[0];
    let noshtuvki = Number(input[1]); 
    let stdCost = 0;  
    let aptCost = 0; 
    let finalSumA = 0 /*студио*/; let finalSumB = 0/*апартамент*/; 
    switch(month){
        case "May" : 
        case "October" :
            stdCost = 50; 
            aptCost = 65; 
            finalSumA = stdCost * noshtuvki; 
            finalSumB = aptCost * noshtuvki;  
            if (noshtuvki > 7 && noshtuvki <= 14){
                finalSumA = stdCost * noshtuvki * 0.95; 
                
            } else if(noshtuvki > 14){
                finalSumB = aptCost * noshtuvki * 0.90; 
                finalSumA = stdCost * noshtuvki * 0.70;
            } 
        break; 
        case "June" : 
        case "September" : 
        stdCost = 75.20; 
        aptCost = 68.70; 
            finalSumA = stdCost * noshtuvki; 
            finalSumB = aptCost * noshtuvki; 
        if(noshtuvki > 14){
            finalSumB = aptCost * noshtuvki * 0.90; 
            finalSumA = stdCost * noshtuvki * 0.80; 
        } 
        break; 
        case "July" : 
        case "August" : 
        stdCost = 76; 
        aptCost = 77;  
        finalSumA = stdCost * noshtuvki; 
            finalSumB = aptCost * noshtuvki;
        if(noshtuvki > 14){
            finalSumB = aptCost * noshtuvki * 0.90; 
            finalSumA = stdCost * noshtuvki ;
        } 
        break; 
    }  
    
    console.log(`Apartment: ${finalSumB.toFixed(2)} lv.`); 
    console.log(`Studio: ${finalSumA.toFixed(2)} lv.`);

} 
trumpHotel(["May" , "20"]); 
// 100/100 4th try .... 60/60/70/100