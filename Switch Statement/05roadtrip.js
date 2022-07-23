// Странно, но повечето хора си плануват отрано почивката. Млад програмист разполага с 
// определен бюджет и свободно време в даден сезон. Напишете функция, която да получава 
// бюджета и сезона и на изхода да изкарва, къде ще почива програмистът и колко ще похарчи.
// // Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. Ако е 
// лято ще почива на къмпинг, а зимата в хотел. Ако е в Европа, независимо от сезона ще 
// почива в хотел. Всеки къмпинг или хотел, според дестинацията, има собствена цена която 
// отговаря на даден процент от бюджета: 
// •	При 100лв. или по-малко – някъде в България
// o	Лято – 30% от бюджета
// o	Зима – 70% от бюджета
// •	При 1000лв. или по малко – някъде на Балканите
// o	Лято – 40% от бюджета
// o	Зима – 80% от бюджета
// •	При повече от 1000лв. – някъде из Европа
// o	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.
// Вход
// Приемат се 2 аргумента :
// •	Първи– Бюджет, реално число в интервала [10.00...5000.00].
// •	Втори–  Един от двата възможни сезона: "summer" или "winter"
// Изход
// На конзолата трябва да се отпечатат два реда.
// •	Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
// •	Втори ред – "{Вид почивка} – {Похарчена сума}"
// o	Почивката може да е между "Camp" и "Hotel"
// o	Сумата трябва да е закръглена с точност до вторият знак след запетаята.
function journey(input){
    let budget = Number(input[0]); 
    let season = input[1]; 
    let moneySpent = 0; 
    if (budget <= 100){
        console.log('Somewhere in Bulgaria'); 
        switch (season){
            case "summer" : 
            moneySpent = budget * 0.30; 
            console.log(`Camp - ${moneySpent.toFixed(2)}`); break;
            case "winter" : 
            moneySpent = budget * 0.70;  
            console.log(`Hotel - ${moneySpent.toFixed(2)}`); break;
        }
    } else if (budget <= 1000){
        console.log('Somewhere in Balkans'); 
        switch (season){
            case "summer" : 
            moneySpent = budget * 0.40;  
            console.log(`Camp - ${moneySpent.toFixed(2)}`); break;
            case "winter" : 
            moneySpent = budget * 0.80;  
            console.log(`Hotel - ${moneySpent.toFixed(2)}`); break;
        }
    } else if (budget > 1000){
        console.log('Somewhere in Europe'); 
        moneySpent = budget * 0.90; 
        switch (season){
            case "summer" : 
            moneySpent = budget * 0.90;  
            console.log(`Hotel - ${moneySpent.toFixed(2)}`); break;
            case "winter" : 
            moneySpent = budget * 0.90;  
            console.log(`Hotel - ${moneySpent.toFixed(2)}`); break;
        }
    }
} 
journey(["75", "winter"]); 
// 100/100 3rd time ;';'p[[]] 0/100 81/100