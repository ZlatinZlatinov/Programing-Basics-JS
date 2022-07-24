function rabotenDen(input){
    let cuka = input[0]; 
    switch(cuka){
        case "Monday" : // console.log("Working day"); break; 
        case "Tuesday" : // console.log("Working day"); break; 
        case "Wednesday" : // console.log("Working day"); break; 
        case "Thursday" : // console.log("Working day"); break; 
        case "Friday" : console.log("Working day"); break; // работи и така чете за сравнения и изпълнява кода къдто има поставена инструкция 
        case "Saturday" : // console.log("Weekend"); break; 
        case "Sunday" : console.log("Weekend"); break; 
        default : console.log("Error"); break;
    }
} 
rabotenDen(["Thursday"]);