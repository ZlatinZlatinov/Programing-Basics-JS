function bolnica (input) {
    let index = 0; 
    let days = Number(input[index]); 
    index ++; let doctors = 7;
    let untreated = 0;  let treated = 0;
    for( let i = 1; i <= days; i++){
        let dayilyCount = Number(input[index]); 
        index++;
        if ( i % 3 === 0 && untreated > treated){
            doctors++;
        } 
        if (dayilyCount <= doctors){
            treated += dayilyCount;
        } else if ( dayilyCount > doctors){
            treated += doctors; 
            untreated += (dayilyCount - doctors);
        }  
    } 
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
    
}  
bolnica(["4" , "7" , "27" , "9" , "1"]); //100/100 
bolnica(["3" , "7" , "7" , "7"]); 
bolnica(["6" , "25" , "25" , "25" , "25" , "25" , "2"]); // 50/100
//bolnica(["2" , "14" , "0"]); // drugo reshenie na patients i moretest