function testerPro (input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]); 
    const chasove = hours * 60; 
    const sbor = 15 + minutes + chasove; 
    const more = sbor % 60 
    const oste = minutes + 15; 
    const laylow = chasove % 24
    if (oste < 60){
        console.log(`${hours}:${oste}`);
    } 
    if ( sbor > 1450){ 
        console.log(`0:${more}`); 
    } else if( sbor > 1439){ 
        console.log(`0:0${more}`); 

    }   
    if  (more < 10){ 
        hours += 1
        console.log(`${hours}:0${more}`); 
     
    }   else if (more < 15){ 
        hours += 1;
        console.log(`${hours}:${more}`);
    } else{ 
        console.log(`${hours+1}:00`);
    } 
} 
testerPro(["0" , "45"]);