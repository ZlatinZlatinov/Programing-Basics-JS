function continueDtoBe (){
    let i = 0; 
    while ( i <= 10){ 
        if ( i % 2 === 0){ // (i % 2 != 0) -> за четни числа
            i++; 
            continue;
        } 
        console.log(i); 
        i++
    }
} // отпечатва нечетните числа от 1 до 10;
continueDtoBe();