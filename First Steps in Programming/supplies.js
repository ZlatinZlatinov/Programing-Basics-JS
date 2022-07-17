function suppliesForSchool (input) {
    const penPacksPrice = 5.8 ;
    const markerPacksPrice = 7.2 ; 
    const cleaningDetergentPrice = 1.2; 
    const penPacksNumber = Number(input[0]); 
    const markerPacksNumber = Number (input[1]); 
    const cleaningDetergentNumber = Number (input[2]); 
    const discountPrice = Number (input[3]); 
const totalPrice = (penPacksNumber * penPacksPrice) + (markerPacksNumber * markerPacksPrice) + 
(cleaningDetergentNumber * cleaningDetergentPrice) ;
const finalPriceAfterDicount = totalPrice - (discountPrice / 100) * totalPrice; 
console.log(finalPriceAfterDicount);

} 
suppliesForSchool(["2 " , "3 " , "4 " , "25"]) 
// te i tva raboti na maks waa , toa smotan judjse