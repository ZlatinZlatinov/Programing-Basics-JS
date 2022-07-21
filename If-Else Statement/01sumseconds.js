/*Зад.1 Задание: Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). 
Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време 
във формат "минути:секунди". Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35"). */ 
// вход: (["35","45","44"]) 
function sumSeconds(input){
    let sekundiA = Number(input[0]);
    let sekundiB = Number(input[1]); 
    let secundiC = Number(input[2]); 
    const sumarno = sekundiA + sekundiB + secundiC; 
    const minuti = sumarno / 60; 
    const seconds = sumarno % 60; 
    if (seconds >= 10){ 
        console.log(`${Math.floor(minuti)}:${seconds}`);

    }else{
        console.log(`${Math.floor(minuti)}:0${seconds}`);
    }
    // console.log(`${Math.floor(minuti)}:0${seconds}`); 

}
sumSeconds(["14","12","10"]); 
// #if it works , dont touch it! ... 
// 100/100 wee s 1via put xdd
