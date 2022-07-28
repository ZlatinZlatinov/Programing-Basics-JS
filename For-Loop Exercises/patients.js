function bolnica (input){ // 02Hospital
    let index = 0;  let sum = 0;
    let period = Number(input[index]); 
    index ++;  
    let lekari = 7; let pove4ePacienti = 0;  let normalnoPacienti = 0 ;
    for (let i = 0; i < period; i++){ // те така ше пробвам да взема 3ти ден; 
        sum += Number(input[i]); //тва брои общия брой пациенти
        let pacienti = Number(input[index]); // тва печата всеки елемент на нов ред без 1вия;
        index++; 
        if ( (i+1) != 3){
            if (pacienti > lekari){
                pove4ePacienti += pacienti - lekari; 
                //lekari++;
            }
        } else if( (i+1) % 3 === 0){
            if (pacienti > lekari){ 
                lekari++;
                pove4ePacienti += pacienti - lekari; 
                //lekari++;
            } 

        } 
    }  
    // if ( pove4ePacienti <= 0){
    //     normalnoPacienti = sum; 
    // } else{
    //     normalnoPacienti = sum - pove4ePacienti; 
    // } 
    //console.log(sum);
    normalnoPacienti = sum - pove4ePacienti; 
    console.log(`Treated patients: ${normalnoPacienti}.`);
    console.log(`Untreated patients: ${pove4ePacienti}.`);
} 
//bolnica(["4" , "7" , "27" , "9" , "1"]); 
//bolnica(["3" , "7" , "7" , "7"]); 
bolnica(["6" , "25" , "25" , "25" , "25" , "25" , "2"]); // 50/100