function trip (input){ 
    let destination = input[0]; 
    let date = input[1]; 
    let nights = Number(input[2]); 
    let price = 0;
    switch(date){
        case "21-23" : 
        if (destination === "Germany"){
            price = 32;
        } else if (destination === "France"){
            price = 30;
        } else if (destination === "Italy"){
            price = 28;
        }
        break; 
        case "24-27" : 
        if (destination === "Germany"){
            price = 37;
        } else if (destination === "France"){
            price = 35;
        } else if (destination === "Italy"){
            price = 32;
        } 
        break; 
        case "28-31" : 
        if (destination === "Germany"){
            price = 43;
        } else if (destination === "France"){
            price = 40;
        } else if (destination === "Italy"){
            price = 39;
        }
        break;
    } 
    let totalSum = nights * price; 
    console.log(`Easter trip to ${destination} : ${totalSum.toFixed(2)} leva.`);
} 
trip(["Germany" , "24-27" , "5"]);