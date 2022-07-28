function bolnica (input){ // 02 Hospital
    let index = 0;  let sum = 0;
    let period = Number(input[index]); 
    index ++;  
    let lekari = 7; let pove4ePacienti = 0;  let normalnoPacienti = 0 ;
    for (let i = 1; i <= period; i++){
        sum += Number(input[i]);
    }  
    for (let i = 0; i < period; i++){  // stava i s i=1, i <=period , posle bez day , posle i%3 samo
         
        let pacienti = Number(input[index]); 
        index++;  
        let day = i+1;
        if( day % 3 === 0){
                if (pacienti > lekari){ 
                     lekari++;
                     pove4ePacienti += pacienti - lekari; 
                     
                    }  
                } else{
                    if (pacienti > lekari){ 
                       
                        pove4ePacienti += pacienti - lekari; 
                        
                    } 
                } 
                
        }   
    normalnoPacienti = sum - pove4ePacienti; 
    console.log(`Treated patients: ${normalnoPacienti}.`);
    console.log(`Untreated patients: ${pove4ePacienti}.`); //70 / 100 xdd
} 
bolnica(["6" , "25" , "25" , "25" , "25" , "25" , "2"]); 
bolnica(["3" , "7" , "7" , "7"]); 
bolnica(["4" , "7" , "27" , "9" , "1"]);