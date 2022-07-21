/* Зад.4 Задание: Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. 
С парите, които ще спечели иска да отиде на екскурзия. 
Цени на играчките:
•	Пъзел - 2.60 лв.
•	Говореща кукла - 3 лв.
•	Плюшено мече - 4.10 лв.
•	Миньон - 8.20 лв.
•	Камионче - 2 лв.
Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените 
пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
Вход
От конзолата се четат 6 реда:
1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
2.	Брой пъзели - цяло число в интервала [0… 1000]
3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
5.	Брой миньони - цяло число в интервала [0 … 1000]
6.	Брой камиончета - цяло число в интервала [0 … 1000]
Изход
На конзолата се отпечатва:
•	Ако парите са достатъчни се отпечатва:
o	"Yes! {оставащите пари} lv left."
•	Ако парите НЕ са достатъчни се отпечатва:
o	"Not enough money! {недостигащите пари} lv needed."

Резултатът трябва да се форматира до втория знак след десетичната запетая.
*/ 
function toyStore(input){
    let cenaEkskurziq = Number(input[0]); 
    let broiPuzeli = Number(input[1]) // * 2.6; 
    let broiKukli = Number(input[2])  // * 3; 
    let broiMechki = Number(input[3]) // * 4.10; 
    let broiMinioni = Number(input[4]) // * 8.20; 
    let broiKamioncheta = Number(input[5]) // * 2; 
    const poruchaniIgrachki = broiPuzeli + broiKukli + broiMechki + broiMinioni + broiKamioncheta; 
    const totalPrice = broiPuzeli*2.6 + broiKukli*3 + broiMechki*4.1 + broiMinioni*8.2 + broiKamioncheta*2;
    let naem = 0;
    let otstupka = 0; 
    // let pechalba = 0;
   
    if ( poruchaniIgrachki >= 50 ){
         otstupka = totalPrice*0.75; 
         naem = otstupka*0.9; 
        // pechalba = otstupka - naem; 
    }else if(poruchaniIgrachki < 50){
         naem = totalPrice*0.9 
        // pechalba = totalPrice - naem;
    } 
    if (naem >= cenaEkskurziq){ 
        console.log(`Yes! ${(naem - cenaEkskurziq).toFixed(2)} lv left.`); 

    } else if (naem < cenaEkskurziq){
        console.log(`Not enough money! ${(cenaEkskurziq - naem).toFixed(2)} lv needed.`);
    }

} 
toyStore(["40.8","20","25","30","50","10"]); 
// Maliii 100/100 weee s purviq put deaa xDD
