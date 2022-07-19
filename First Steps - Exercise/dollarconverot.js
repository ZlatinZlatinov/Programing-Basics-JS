/*Задание: Напишете функция за конвертиране на щатски долари (USD) 
в български лева (BGN). Използвайте фиксиран курс между долар и лев: 1 USD = 1.79549 BGN.*/ 
// потребителски вход 22 пари 
function dollaConverter (input){
    const bgnCanaZaDolar = 1.79549 ;
    let broiPari = Number(input[0]) ;
    const preobrazuvano = bgnCanaZaDolar * broiPari; 
    console.log(preobrazuvano); 

} 
dollaConverter(["22"]); 

// 100/100 tez az sum gi prail wee