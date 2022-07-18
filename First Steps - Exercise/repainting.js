/*Задание: Румен иска да пребоядиса хола и за целта е наел майстори. Напишете програма,
 която изчислява разходите за ремонта, предвид следните цени:
•	Предпазен найлон - 1.50 лв. за кв. метър
•	Боя - 14.50 лв. за литър
•	Разредител за боя - 5.00 лв. за литър
За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, 
разбира се и 0.40 лв. за торбички. Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от 
сбора на всички разходи за материали.

Вход

Входът се чете от конзолата и съдържа точно 4 реда:
1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
3.	Количество разредител (в литри) - цяло число в интервала [1…30]
4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
Изход
Да се отпечата на конзолата един ред:
•	"{сумата на всички разходи}"
*/ 
// Потребителски вход: ["10 ","11 ","4 ","8 "] 

function repainting(input){
    let neobhodimNailon = Number(input[0]) + 2; 
    let neobhodimaBoq= Number(input[1]); 
    let ovelichenaBoq = neobhodimaBoq + (neobhodimaBoq*0.1)
    let razreditel = Number(input[2]); 
    let workHours = Number(input[3]); 
    let cenaTorbichki=0.4; 
    const cenaNailon = neobhodimNailon * 1.5; 
    const cenaBoq = ovelichenaBoq * 14.5; 
    const cenaRazreditel = razreditel * 5; 
    const cenaMateriali = cenaBoq + cenaNailon + cenaRazreditel + cenaTorbichki;
    const finalSumMaistori = (cenaMateriali * 0.3)*workHours; 
    const totalSum = finalSumMaistori + cenaMateriali ;
    console.log(totalSum);
} 
repainting(["10" , "11" , "4" , "8"]); 

// napraih go i tva 100/100 toz put edna ideq malko po sukrateno 
// даже и малко оптимизирах кода да е по-съкратен хдд