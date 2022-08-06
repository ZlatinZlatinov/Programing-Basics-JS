/* По време на седмицата на Оскарите, градското кино пуска прожекции на някои от филмите, които 
са номинирани в категорията за "Най-добър филм". В таблицата са показани кои са филмите и каква е цената 
за прожекция спрямо залата, в която се прожектира филмът 
Напишете програма, която изчислява какъв е приходът от даден филм, като знаете в какъв тип зала се прожектира 
и колко човека са си купили билет за прожекцията.
Вход
Входът се чете от конзолата и се състои от три реда:
 Първи ред – име на филм – текст ("A Star Is Born", "Bohemian Rhapsody","Green Book" или "The Favourite")
 Втори ред– вид на залата – текст ("normal", "luxury" или "ultra luxury")
 Трети ред – брой на закупените билети – цяло число в интервала [1…100]
Изход
На конзолата трябва да се отпечата един ред:
"{име на филма} -> {приходи от прожекцията на филма} lv."
Приходите да бъдат закръглени до втория знак след десетичната запетая.
*/ 
function cannesDeOscars (input){
    let movieName = input[0]; 
    let cinemaType = input[1]; 
    let ticketsCount = Number(input[2]); 
    let cena = 0;
    if (movieName === "A Star Is Born"){
        switch(cinemaType){
            case "normal" : 
            cena = 7.50; break;
            case "luxury" : 
            cena = 10.50 ; break;
            case "ultra luxury" : 
            cena = 13.50; break 
            default : 
            break; 
        }
    } else if (movieName === "Bohemian Rhapsody"){
        switch(cinemaType){
            case "normal" : 
            cena = 7.35; break;
            case "luxury" : 
            cena = 10.45 ; break;
            case "ultra luxury" : 
            cena = 12.75; break 
            default : 
            break; 
        } 
    } else if (movieName === "Green Book"){
        switch(cinemaType){
            case "normal" : 
            cena = 8.15; break;
            case "luxury" : 
            cena = 10.25 ; break;
            case "ultra luxury" : 
            cena = 13.25; break 
            default : 
            break; 
        }  
    } else if (movieName === "The Favourite"){
        switch(cinemaType){
            case "normal" : 
            cena = 8.75; break;
            case "luxury" : 
            cena = 11.55 ; break;
            case "ultra luxury" : 
            cena = 13.95; break 
            default : 
            break; 
        } 
    }  
    let boxOffice = cena * ticketsCount; 
    switch (movieName){ 
        case "A Star Is Born" : 
        console.log(`${movieName} -> ${boxOffice.toFixed(2)} lv.`); 
        break;  
        case "Bohemian Rhapsody" : 
        console.log(`${movieName} -> ${boxOffice.toFixed(2)} lv.`); 
        break; 
        case "Green Book" : 
        console.log(`${movieName} -> ${boxOffice.toFixed(2)} lv.`); 
        break; 
        case "The Favourite" : 
        console.log(`${movieName} -> ${boxOffice.toFixed(2)} lv.`); 
        default : 
        break;
    }
     
    //console.log(`${movieName} -> ${boxOffice.toFixed(2)} lv.`);
} 
cannesDeOscars (["A Star Is Born" , "luxury" , "42"]); 
cannesDeOscars (["Terminator" , "normal" , "63"]);  // 100/100 ezz
cannesDeOscars (["The Favourite" , "ultra luxury" , "34"]);