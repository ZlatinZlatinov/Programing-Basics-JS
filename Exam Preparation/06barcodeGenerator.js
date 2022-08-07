function barkod (input){
    let startNumber = input[0]; 
    let endNumber = input[1]; 
    let print = ''; 
    for(let w = startNumber.charAt(0); w <= endNumber.charAt(0); w++){
        for(let x = startNumber.charAt(1); x <= endNumber.charAt(1); x++){
            for(let y = startNumber.charAt(2); y <= endNumber.charAt(2); y++){
                for(let z = startNumber.charAt(3); z <= endNumber.charAt(3); z++){
                    if (w % 2 !== 0 && x % 2 !== 0 && y % 2 !== 0 && z % 2 !== 0){
                        print +=''+`${w}${x}${y}${z} `;
                    }
                }
            }
        } 
    }  
    console.log(print);
} // 100 / 100 ; siiiieeu
barkod(["2345" , "6789"]);