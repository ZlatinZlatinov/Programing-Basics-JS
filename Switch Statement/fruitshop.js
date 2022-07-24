function zelenchuci(input){ 
    let plod = input[0]; 
    let den = input[1]; 
    let kolichestvo = Number(input[2]); 
    let cena = ""  
    
    
    
    switch(plod){ 
        case "banana": 
        if(den === "Saturday" || den === "Sunday"){
            cena = (kolichestvo * 2.70).toFixed(2);   
        } else if(den === 'Monday' || den === 'Tuesday' || den ==='Wednesday' || den=== 'Thursday' || den === 'Friday'){
            cena = (kolichestvo * 2.50).toFixed(2); 
        } else{
            console.log("error");
        }
        break;
    
        case "apple" : 
        if(den == "Saturday" || den == "Sunday"){ 
            cena = (kolichestvo * 1.25).toFixed(2); 
        } else if(den === 'Monday' || den === 'Tuesday' || den ==='Wednesday' || den=== 'Thursday' || den === 'Friday'){ 
            cena = (kolichestvo * 1.20).toFixed(2); 
        } else{
            console.log("error"); 
        }
        break; 
        
        case "orange" : 
        if(den == "Saturday" || den == "Sunday"){
            cena = (kolichestvo * 0.90).toFixed(2);
        } else if(den === 'Monday' || den === 'Tuesday' || den ==='Wednesday' || den=== 'Thursday' || den === 'Friday'){
            cena = (kolichestvo * 0.85).toFixed(2); 
        } else{
            console.log("error");
        }
        break; 

        case "grapefruit" : 
        if(den == "Saturday" || den == "Sunday"){
            cena = (kolichestvo * 1.60).toFixed(2);
        } else if(den === 'Monday' || den === 'Tuesday' || den ==='Wednesday' || den=== 'Thursday' || den === 'Friday'){
            cena = (kolichestvo * 1.45).toFixed(2);
        } else{
            console.log("error");
        }
        break; 

        case "kiwi" : 
        if(den == "Saturday" || den == "Sunday"){
            cena = (kolichestvo * 3.00).toFixed(2); 
        } else if(den === 'Monday' || den === 'Tuesday' || den ==='Wednesday' || den=== 'Thursday' || den === 'Friday'){
            cena = (kolichestvo * 2.70).toFixed(2); 
        } else{
            console.log("error");
        }
        break;
         
        case "pineapple" : 
        if(den == "Saturday" || den == "Sunday"){
            cena = (kolichestvo * 5.60).toFixed(2);
        } else if(den === 'Monday' || den === 'Tuesday' || den ==='Wednesday' || den=== 'Thursday' || den === 'Friday'){
            cena = (kolichestvo * 5.50).toFixed(2);
        } else{
            console.log("error");
        }
        break;
         
        case "grapes" : 
        if(den == "Saturday" || den == "Sunday"){
            cena = (kolichestvo * 4.20).toFixed(2);
        } else if(den === 'Monday' || den === 'Tuesday' || den ==='Wednesday' || den=== 'Thursday' || den === 'Friday'){
            cena = (kolichestvo * 3.85).toFixed(2);
        } else{
            console.log("error");
        }
        break;
         
        default : console.log("error"); 
        break;
        
        

    }

    console.log(cena);
    

} 
zelenchuci(["kiwi" , "Monday" , "2"/*количество*/]); 
// 3rd time and a few hours later 100/100 