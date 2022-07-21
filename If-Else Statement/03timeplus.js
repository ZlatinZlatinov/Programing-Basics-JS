/* Зад.3 Задание: Да се напише функция, която получава час и минути от 24-часово денонощие 
и изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат часове:минути. 
Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една 
или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. 
Вход часове: 1 минути: 46*/ 
function timePlus (input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]); 
    const chasove = hours * 60; 
    const sbor = 15 + minutes + chasove; 
    const more = sbor % 60 
    const oste = minutes + 15; 
    if (oste < 60){
        console.log(`${hours}:${oste}`);
    }
    if (more == 0){ 
        console.log(`${hours+1}:00`);
    } else if( sbor > 1450){ 
        console.log(`0:${more}`); 
    } else if( sbor > 1439){ 
        console.log(`0:0${more}`);
    } else if (more < 10){ 
        hours += 1
        console.log(`${hours}:0${more}`); 
    } else if (more < 15){ 
        hours += 1;
        console.log(`${hours}:${more}`);
    }  
}
timePlus(["0" , "54"]); // работи до минути 54 вкл, за 23 работи целия час без точно 23:45 
// в тестер.жс е правилното решение ; 100/100 в джъдж хдд