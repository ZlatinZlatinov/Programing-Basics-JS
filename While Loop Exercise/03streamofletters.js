// vhod HnellooctchoereneEnd; 
function letterReader(input){
    let index = 0 ; 
    let command = input[index] 
    //let letterA = input[index]; 
    //index++; 
    //let letterB = input[index]; 
    let print = '' 
    let cCounter = 0; let oCounter = 0; let nCounter = 0;  
    let anotherCounter = 0; let printB = '' ; let space = ' ';
    while(command !== "End"){ 
        let letterA = input[index]; 
        index++; 
        //cCounter++; oCounter++; nCounter++;
        if ( letterA === 'n'){ 
            nCounter++; 
            if (nCounter <= 1){ 
                anotherCounter++; 
                //index++;
                continue;
            }
        } 
        if ( letterA === 'o'){ 
            oCounter++; 
            if (oCounter <= 1){  
                anotherCounter++;
                //index++;
                continue;
            }
        } 
        if ( letterA === 'c'){ 
            cCounter++; 
            if (cCounter <= 1){ 
                anotherCounter++;
                //index++;
                continue; 
                
            } 
        }  
        if (anotherCounter < 3){
            print += letterA;
        } else if( anotherCounter === 3){ 
            //index++;
            print+= (letterA + space)
        }

        //print += letterA;  
        //console.log(print);
        command = input[index]; 
        //index++; 
        //console.log(print);
    } 
    console.log(print);
} 
letterReader(["H" , "n" , "e" , "l" , "l" , "o" , "o" , "c" , "t" , "c" , "h" , "o" , "e" , "r" , "e" , "n" , "e" , "End"]);