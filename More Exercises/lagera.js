function lager(input){
    let season = input[0]; 
    let groupType = input[1]; 
    let studentsCount = Number(input[2]); 
    let nightsCount = Number(input[3]); let totalCost = 0;
    let finalPriceBoys = 0; let finalPriceGirls = 0; let finalPriceGenderi = 0; 
    let sport= "" ; 
    switch(season){
        case "Winter" : 
        finalPriceBoys = nightsCount * 9.60; 
        finalPriceGirls = nightsCount * 9.60; 
        finalPriceGenderi = nightsCount * 10; 
        break; 
        case "Spring" : 
        finalPriceBoys = nightsCount * 7.20; 
        finalPriceGirls = nightsCount * 7.20; 
        finalPriceGenderi = nightsCount * 9.50; 
        break; 
        case "Summer" : 
        finalPriceBoys = nightsCount * 15; 
        finalPriceGirls = nightsCount * 15; 
        finalPriceGenderi = nightsCount * 20; 
        break; 
    } 
    switch(groupType){
        case "boys" :
            totalCost = studentsCount * finalPriceBoys; break; 
        case "girls" : 
            totalCost = studentsCount * finalPriceGirls; break; 
        case "mixed" :
            totalCost = studentsCount * finalPriceGenderi; break; 
    } 
    if(studentsCount >=50){
        totalCost *= 0.5;
    } else if ( studentsCount >= 20 && studentsCount < 50){
        totalCost *= 0.85; 
    } else if (studentsCount >= 10 && studentsCount < 20){
        totalCost *= 0.95;
    } 
    switch(season){
        case "Winter" : 
        if (groupType == "boys"){
            sport = "Judo";
        } else if (groupType == "girls"){
            sport = "Gymnastics"; 
        } else if (groupType == "mixed"){
            sport = "Ski"; 
        } 
        break; 
        case "Spring" : 
        if (groupType == "boys"){
            sport = "Tennis";
        } else if (groupType == "girls"){
            sport = "Athletics"; 
        } else if (groupType == "mixed"){
            sport = "Cycling"; 
        } 
        break; 
        case "Summer" : 
        if (groupType == "boys"){
            sport = "Football";
        } else if (groupType == "girls"){
            sport = "Volleyball"; 
        } else if (groupType == "mixed"){
            sport = "Swimming"; 
        } 
        break;
    } 
    console.log(`${sport} ${totalCost.toFixed(2)} lv.`); // lv. tochkaaa

    
} 
lager(["Spring" , "girls" , "20" , "7"]); 
// to4kaaa, to4kaaaa da pripadaaash 100/100 2nd try