/* Магазин за цветя предлага 3 вида цветя: хризантеми, рози и лалета. Цените зависят от сезона.
В празнични дни цените на всички цветя се увеличават с 15%. Предлагат се следните отстъпки:
•	За закупени повече от 7 лалета през пролетта – 5% от цената на целият букет.
•	За закупени 10 или повече рози през зимата – 10% от цената на целият букет.
•	За закупени повече от 20 цветя общо през всички сезони – 20% от цената на целият букет.
Отстъпките се правят по така написания ред и могат да се наслагват! Всички отстъпки важат след оскъпяването 
за празничен ден!
Цената за аранжиране на букета винаги е 2лв. Напишете програма, която изчислява цената за един букет.
Вход
Входът се чете от конзолата и съдържа точно 5 реда:
•	На първия ред е броят на закупените хризантеми – цяло число в интервала [0 ... 200]
•	На втория ред е броят на закупените рози – цяло число в интервала [0 ... 200]
•	На третия ред е броят на закупените лалета – цяло число в интервала [0 ... 200]
•	На четвъртия ред е посочен сезона – [Spring, Summer, Аutumn, Winter]
•	На петия ред е посочено дали денят е празник – [Y – да / N - не]
Изход
Да се отпечата на конзолата 1 число – цената на цветята, форматирана до вторият знак след десетичната запетая.

*/ 
function flowerShop(input){
    let hrizantemiCount = Number(input[0]);
    let roziCount = Number(input[1]); 
    let laletaCount = Number(input[2]); 
    let season = input[3]; 
    let praznik = input[4]; 
    let totalPrice = 0;  
    let hrizantemiPrice = 0 ;
    let roziPrice = 0;
    let laletaPrice = 0; 
    let broiCvetq = hrizantemiCount + laletaCount + roziCount;
    switch (season){
        case "Spring" : 
        case "Summer" : 
         hrizantemiPrice = hrizantemiCount * 2.00; 
         roziPrice = roziCount * 4.10; 
         laletaPrice = laletaCount * 2.50; 
     break; 
        case "Autumn" : 
        case "Winter" : 
        hrizantemiPrice = hrizantemiCount * 3.75; 
        roziPrice = roziCount * 4.50; 
        laletaPrice = laletaCount * 4.15; 
        break;
    } 
    if (praznik === "Y"){
        totalPrice = (hrizantemiPrice + roziPrice + laletaPrice)*1.15;
    } else{
    totalPrice = hrizantemiPrice + roziPrice + laletaPrice ; 
    } 
    if (laletaCount > 7 && season === "Spring"){
        totalPrice *= 0.95;
    }  
    if(roziCount >= 10 && season === "Winter"){
        totalPrice *= 0.90;
    }  

    if(broiCvetq > 20){
        totalPrice *= 0.80;
    } 
    console.log(`${(totalPrice+2).toFixed(2)}`);

} 
flowerShop (["2" , "4" , "8" , "Spring" , "Y"]); 
flowerShop (["3" , "10" , "9" , "Winter" , "N"]);  
// 100/100 1st try suuiiiii