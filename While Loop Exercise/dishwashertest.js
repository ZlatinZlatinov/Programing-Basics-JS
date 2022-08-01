function sudomiqlna(input){
    let broiBotilki = Number(input[0]); 
    let kolichestvoZabotilka = 750; 
    const obshtoVero = broiBotilki * kolichestvoZabotilka; 
    const preparatZaChiniq = 5; const preparatZaTenjera = 15; 
    let chinii = 0; let tenjeri = 0;  let chiniiDve = 0;
    let index = 1; let command = input[index];  
    let sum = 0; let chiniiCount = 0; let tenjeriCount = 0;
    while(command !== "End" && command !== undefined){
        chinii = Number(input[index]); 
        chiniiCount += Number(input[index]); 
        index++; 
        chiniiDve = Number(input[index]); 
        chiniiCount += Number(input[index]); 
        index++; 
        tenjeri = Number(input[index]); 
        tenjeriCount += Number(input[index]);  
        index++; 
        let broiChinii = chinii * preparatZaChiniq; 
        let broiChiniidve = chiniiDve * preparatZaChiniq; 
        let broiTenjeri = tenjeri * preparatZaTenjera;             
        sum += broiChinii + broiChiniidve + broiTenjeri;
       
        command = input[index]; 
    }    
    if ( sum <= obshtoVero){
        let diff = obshtoVero - sum;  
        console.log("Detergent was enough!");  
        console.log(`${chiniiCount} dishes and ${tenjeriCount} pots were washed.`); 
        console.log(`Leftover detergent ${diff} ml.`);
    } else if ( sum > obshtoVero){ 
        let diff = sum - obshtoVero
        console.log(`Not enough detergent, ${diff} ml. more necessary!`);
    }
} 
//sudomiqlna(["2" , "53" , "65" , "55"]); // 60/ 100 atm
sudomiqlna(["3" , "10" , "15" , "10" , "12" , "13" , "30"]);