function histograma(input){ 
    let num = Number(input[0]);
    let p1Counter = 0; 
    let p2Counter = 0; 
    let p3Counter = 0; 
    let p4Counter = 0; 
    let p5Counter = 0; 
    for( let i = 1; i <= num; i++){
        //console.log(input[i]); 
        let suma = input[i]; 
        if(suma < 200){
            p1Counter += 1;
        } else if (suma >=200 && suma <= 399){
            p2Counter += 1;
        } else if (suma >= 400 && suma <= 599){
            p3Counter += 1; 
        } else if (suma >= 600 && suma <= 799){
            p4Counter += 1; 
        } else if (suma >= 800){
            p5Counter += 1;
        }
    } 
    let p1Percentage = p1Counter / num * 100; 
    let p2Percentage = p2Counter / num * 100; 
    let p3Percentage = p3Counter / num * 100; 
    let p4Percentage = p4Counter / num * 100; 
    let p5Percentage = p5Counter / num * 100; 
    console.log(`${p1Percentage.toFixed(2)}%`); 
    console.log(`${p2Percentage.toFixed(2)}%`); 
    console.log(`${p3Percentage.toFixed(2)}%`); 
    console.log(`${p4Percentage.toFixed(2)}%`); 
    console.log(`${p5Percentage.toFixed(2)}%`); 
    
} 
histograma(["3","1","2","999"]); // 100 / 100 ezz
histograma(["7","800","801","250","199","399","599","799"]);

