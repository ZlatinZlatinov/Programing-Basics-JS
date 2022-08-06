/* Фирма-производител на алуминиева дограма приема поръчки за изработката и монтаж със следния ценоразпис 
за един брой. Фирмата приема само поръчки на едро (над 10 бр.). В зависимост от поръчания брой дограми, 
фирмата прави различна отстъпка на своите клиенти.
Фирмата предлага също и доставка на поръчките си срещу 60 лв.
Ако поръчката надвишава 99 броя  – върху крайната цена се начисляват допълнителни 4% отстъпка 
(след като се начисли цената за доставка, ако има такава).
При поръчка под 10 бр. на конзолата да бъде изписано "Invalid order"
Вход:
Потребителят въвежда 3 реда:
1.	Брой дограми – цяло число в интервала [0..1000];
2.	Вид на дограмите – текст "90X130" или "100X150" или "130X180" или "200X300";
3.	Начин на получаване – текст
•	С доставка - "With delivery" 
•	Без доставка - "Without delivery"
Изход:
Извежда се едно число – стойността на поръчката, в следния формат:
o	"{Обща стойност на поръчката} BGN"
Резултатът да се форматира до втори знак след десетичната запетая.
*/ 
function shtiStroshaDjama (input){ // vernoto e v aluminBakur
    let dogramaCount = Number(input[0]); 
    let dogramaRazmer = input[1]; 
    let nachinNaDostavka = input[2]; 
    let cena = 0; let otstupka = 0; 
    switch(dogramaRazmer){ 
        
        case "90X130" : 
            cena = 110; 
            if(dogramaCount < 10){
                console.log("Invalid order"); 
            } else if(dogramaCount > 30 && dogramaCount <= 60){ 
                otstupka = cena * dogramaCount;
                otstupka *= 0.95;
            }else if(dogramaCount > 60){ 
                otstupka = cena * dogramaCount;
                otstupka *= 0.92
            }
        break; 
        case "100X150" :
            cena = 140; 
            if(dogramaCount < 10){
                console.log("Invalid order");
            } else if(dogramaCount > 40 && dogramaCount <= 80){ 
                otstupka = cena * dogramaCount;
                otstupka *= 0.94;
            }else if(dogramaCount > 80){ 
                otstupka = cena * dogramaCount;
                otstupka *= 0.90
            }
        break; 
        case "130X180" : 
            cena = 190; 
            if(dogramaCount < 10){
                console.log("Invalid order");
            } else if(dogramaCount > 20 && dogramaCount <= 50){ 
                otstupka = cena * dogramaCount;
                otstupka *= 0.93;
            }else if(dogramaCount > 50){ 
                otstupka = cena * dogramaCount;
                otstupka *= 0.88;
            }
        break; 
        case "200X300" : 
            cena = 250; 
            if(dogramaCount < 10){
                console.log("Invalid order");
            } else if(dogramaCount > 25 && dogramaCount <= 50){ 
                otstupka = cena * dogramaCount;
                otstupka *= 0.91;
            }else if(dogramaCount > 50){ 
                otstupka = cena * dogramaCount;
                otstupka *= 0.86;
            }
         break; 
        default: 
        break;
    } 
  
    switch (nachinNaDostavka){
        case "With delivery" :  
        if (dogramaCount > 99){ 
           let tamkotdodi = otstupka + 60;
            tamkotdodi *= 0.96; 
            console.log(`${tamkotdodi.toFixed(2)} BGN`);
        } else if (dogramaCount > 10 && dogramaCount <= 99){
            let tamkotdodi = otstupka + 60; 
            console.log(`${tamkotdodi.toFixed(2)} BGN`);
        }
        break; 
        case "Without delivery" :  
        if (dogramaCount > 99){ 
           let tamkotdodi = otstupka; 
            tamkotdodi *= 0.96; 
            console.log(`${tamkotdodi.toFixed(2)} BGN`);
        } else if (dogramaCount > 10 && dogramaCount <= 99){
            let tamkotdodi = otstupka; 
            console.log(`${tamkotdodi.toFixed(2)} BGN`);
        } 
        break; 
        default: 
        break;
    } 
} 
//shtiStroshaDjama(["40" , "90X130" , "Without delivery"]); // za tva pone raboti xdd 
//shtiStroshaDjama(["105" , "100X150" , "With delivery"]);  // 81 / 100 not great not terrible
shtiStroshaDjama(["2" , "130X180" , "With delivery"]);
