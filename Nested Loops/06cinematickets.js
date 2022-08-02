function cinemaCity (input){
    let index = 0; 
    let command = input[index];  
    let totalSoldTickets = 0; let kidsPercentage = 0; 
    let standardPercentage = 0; let studentPercentage = 0;
    while(command !== "Finish"){
        let movieName = input[index]; 
        index++; 
        let freeSeats = Number(input[index]); 
         
        let ticketType = 0;
        let standardCounter = 0; let studentCounter = 0; let kidCounter = 0; 
        let seatCounter = 0;
        while( ticketType !== "End"){ 
             
            index++;
            ticketType = input[index]; 
            
            switch(ticketType){
                case "standard" : 
                seatCounter++; 
                standardCounter++;  break; 
                case "student" : 
                seatCounter++; 
                studentCounter++;  break; 
                case "kid" : 
                seatCounter++; 
                kidCounter++;  break; 
                default : break;
            } 
            if ( seatCounter === freeSeats){
                break;
            } 
             
        } 
        let totalTickets = standardCounter + studentCounter + kidCounter; 
        let percentage = totalTickets * 100 / freeSeats; 
        console.log(`${movieName} - ${percentage.toFixed(2)}% full.`); 
        totalSoldTickets += totalTickets; 
        
        kidsPercentage += kidCounter 
        studentPercentage += studentCounter; 
        standardPercentage += standardCounter;  

        index++;
        command = input[index]  
    } 
    kidsPercentage *= 100 / totalSoldTickets; 
    standardPercentage *= 100 / totalSoldTickets; 
    studentPercentage *= 100 / totalSoldTickets;
    console.log(`Total tickets: ${totalSoldTickets}`); 
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`); 
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`); 
    console.log(`${kidsPercentage.toFixed(2)}% kids tickets.`);
} // 100 / 100
cinemaCity(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);
