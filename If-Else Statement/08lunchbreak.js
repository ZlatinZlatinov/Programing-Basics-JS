/*Зад.8 Задание: По време на обедната почивка искате да изгледате епизод от своя любим сериал. 
Вашата задача е да напишете програма, с която ще разберете дали имате достатъчно време да изгледате епизода. 
По време на почивката отделяте време за обяд и време за отдих. Времето за обяд ще бъде 1/8 от 
времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка. 
Вход
От конзолата се четат 3 реда:
1.	Име на сериал – текст
2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
3.	Продължителност на почивката  – цяло число в диапазона [10… 120]
Изход
На конзолата да се изпише един ред:
•	Ако времето е достатъчно да изгледате епизода: 
"You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
•	Ако времето не Ви е достатъчно:
"You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
Времето да се закръгли до най-близкото цяло число нагоре.
*/ // вход: (["Game of Thrones","60","96"]); 
function obqd(input){
    let serialName = input[0]; 
    let vremeEpizod = Number(input[1]); 
    let vremeZaPochivka = Number(input[2]); 
    const vremeZaObqd = (vremeZaPochivka*1)/8; 
    const vremeZaOtdih =(vremeZaPochivka*1)/4; 
    const timeLeft =Math.abs(vremeZaPochivka - (vremeZaObqd + vremeZaOtdih)); 
    if (timeLeft >= vremeEpizod){ 
        let nqkvovremetam = Math.abs(timeLeft - vremeEpizod);
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(nqkvovremetam)} minutes free time.`); 
    } else if(timeLeft < vremeEpizod){ 
        let drugovreme =Math.abs(vremeEpizod - timeLeft); 
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(drugovreme)} more minutes.`);
    }

} 
obqd(["Teen Wolf","48","60"]); 
// 1-5 try 87/100 ---> math.ceil zakrglq do cqlo chislo, maha zapetqta uj
// math.floor zakryglq do nai niskoto cqlo chislo 
// math.abs ako ima otricatelna stoinost q prevrusta v + 
// 100/100 na 10tiq put nqkude xdd 