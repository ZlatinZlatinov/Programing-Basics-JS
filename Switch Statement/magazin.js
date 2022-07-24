function magazinche(input){
    let productName = input[0]; 
    let grad = input[1]; 
    let kolichestvo = Number(input[2]); 
    let price = 0; 
    if (grad == 'Sofia'){
        switch(productName){
            case "beer" : console.log(`${(1.20 * kolichestvo).toFixed(2)}`); break; 
            case "coffee" : console.log(`${(0.50 * kolichestvo).toFixed(2)}`); break;
            case "water" : console.log(`${(0.80 * kolichestvo).toFixed(2)}`); break; 
            case "sweets" : console.log(`${(1.45 * kolichestvo).toFixed(2)}`); break;
            case "peanuts" : console.log(`${(1.60 * kolichestvo).toFixed(2)}`); break; 
            default : console.log("Check other products and set price"); break;
        }
    } //else{
        //console.log("Check other cities and products"); 
    //} 
    if (grad == 'Plovdiv'){
        switch(productName){
             
            case "coffee" : console.log(`${(0.40 * kolichestvo).toFixed(2)}`); break;
            case "water" : console.log(`${(0.70 * kolichestvo).toFixed(2)}`); break; 
            case "beer" : console.log(`${(1.15 * kolichestvo).toFixed(2)}`); break; 
            case "sweets" : console.log(`${(1.30 * kolichestvo).toFixed(2)}`); break;
            case "peanuts" : console.log(`${(1.50 * kolichestvo).toFixed(2)}`); break; 
            default : console.log("Check other products and set price"); break;
        }
    } //else{
        //console.log("Check other cities and products"); 
    //} 
    if (grad == 'Varna'){
        switch(productName){
             
            case "coffee" : console.log(`${(0.45 * kolichestvo).toFixed(2)}`); break;
            case "water" : console.log(`${(0.70 * kolichestvo).toFixed(2)}`); break; 
            case "beer" : console.log(`${(1.10 * kolichestvo).toFixed(2)}`); break; 
            case "sweets" : console.log(`${(1.35 * kolichestvo).toFixed(2)}`); break;
            case "peanuts" : console.log(`${(1.55 * kolichestvo).toFixed(2)}`); break; 
            default : console.log("Check other products and set price"); break;
        }
    }  
     
    //else{
        //console.log("Check other cities and products"); 
    //}
    
} 
magazinche(["coffee" , "Plovdiv" , "3"]); 
// до някъде работи без else ... сиг тряа да е с else if 
// woo 80/100 1st try , not bad at all 
// 100/100 2nd try ; coffee sa pishi s 2 E we, batal ... все още не съм сигурен за default и дали тряа else 
// Може и да се чупи жъж от не проверява за default само си вкарва стойности за количество май 