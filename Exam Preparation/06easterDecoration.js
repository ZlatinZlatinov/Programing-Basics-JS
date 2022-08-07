function decorationEaster (input){
    let clients = Number(input[0]); 
    let index = 1; let price = 0; 
    let avg = 0;
    for(let x = 1; x <= clients; x++){
        let command = input[index]; 
        let buyCounter = 0; 
        let totalSum = 0;
        while (command !== "Finish") {
            let type = input[index];  
            index++; buyCounter++; 
            switch (type) {
                case "basket":
                   price = 1.50; 
                    
                    break;
                case "wreath" : 
                    price = 3.80; 
                    break; 
                case "chocolate bunny" : 
                    price = 7; 
                    break;
            } 
            totalSum += price; 
            command = input[index];
        } 
        if ( buyCounter % 2 === 0){
            totalSum *= 0.80;
        } 
        avg += totalSum; 
        console.log(`You purchased ${buyCounter} items for ${totalSum.toFixed(2)} leva.`);
        index++;
    } 
    console.log(`Average bill per client is: ${(avg/clients).toFixed(2)} leva.`);
} // 100 / 100
decorationEaster(["2" , "basket" , "wreath", "chocolate bunny" , "Finish", "wreath" , "chocolate bunny" , "Finish"]);