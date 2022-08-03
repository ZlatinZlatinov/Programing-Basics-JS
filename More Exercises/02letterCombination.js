function letters (input){
    let letterA = input[0]; 
    let letterB = input[1]; 
    let letterC = input[2]; 
    let printer = '';  
    let counter = 0;
    //let x = 97; let y = 122; 
    //console.log(letterA.charCodeAt(0)); 
    for (let x = letterA.charCodeAt(0); x <= letterB.charCodeAt(0); x++){
        for(let y = letterA.charCodeAt(0); y <= letterB.charCodeAt(0); y++){
            for(let z = letterA.charCodeAt(0); z <= letterB.charCodeAt(0); z++){ 
                if( x !== letterC.charCodeAt(0) && y !== letterC.charCodeAt(0) && z !== letterC.charCodeAt(0) ){
                    printer +="" + String.fromCharCode(x) + String.fromCharCode(y) + String.fromCharCode(z) + " "; 
                    counter++;
                } 
            }
        }
    } 
    console.log(printer); 
    console.log(counter); // trqbvalo da e pod format console.log(${printer}${counter}) 100/100
} // 100/100 wooo
letters (["a" , "c" , "b"]); // ascii alphabet 97 - 122 / small letters; 65-90 big letters;