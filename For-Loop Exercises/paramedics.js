// 02 hospital another try , somebody better call the paramedics
function hospital (input) {
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
        // if ( i % 3 === 0 && untreated > doctors ){
        //     doctors++;
        // } 

             
    } 
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
    
} 
hospital(["4" , "7" , "27" , "9" , "1"]); 
hospital(["6" , "25" , "25" , "25" , "25" , "25" , "2"]); 
hospital(["3" , "7" , "7" , "7"]); //100/100 ama utreated trqalo da e > ot treated xdd