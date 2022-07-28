function soccer (input){
    let index = 0; 
    let capacity = Number(input[index]); 
    index ++; 
    let ultrasCount = Number(input[index]); 
    index++; 
    let sectorA = 0; let sectorB = 0; let sectorV = 0; let sectorG = 0; 
    //let totalUltrasCount = 0; 
    // Общия брой фенове не надвишава капацитета на стадиона; - ама не го проверява 
    for (let i = 1; i <= ultrasCount; i++){
        // може и без тва totalUltrasCount += Number(input[i]); 
        let sector = input[index];  
        index++;
        switch (sector){
            case "A" : 
            sectorA ++; break; 
            case "B" : 
            sectorB ++; break; 
            case "V" : 
            sectorV ++; break; 
            case "G" : 
            sectorG ++; break; 
            default: 
            break;
        }
    } 
    let aPercentage = sectorA / ultrasCount * 100; 
    let bPercentage = sectorB / ultrasCount * 100; 
    let vPercentage = sectorV / ultrasCount * 100; 
    let gPercentage = sectorG / ultrasCount * 100; 
    let allFansPercentage = ultrasCount / capacity * 100; 
    console.log(`${aPercentage.toFixed(2)}%`); 
    console.log(`${bPercentage.toFixed(2)}%`); 
    console.log(`${vPercentage.toFixed(2)}%`); 
    console.log(`${gPercentage.toFixed(2)}%`); 
    console.log(`${allFansPercentage.toFixed(2)}%`);
} 
soccer(["76" , "10" , "A" , "V" , "V" , "V" , "G" , "B" , "A" , "V" , "B" , "B"]); 
// 100/100 si, ezz  - явно не проверява ако общия брой фенове надвишава капацитета на стадиона хдд