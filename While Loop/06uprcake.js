function cakeBuilder(input){ 
    let daljina = Number(input[0]); 
    let shirina = Number(input[1]); 
    let brojPar4oci = daljina * shirina; 
    let index = 2; 
    let vzetiPAr4eta = input[index]; 
    while (vzetiPAr4eta !== "STOP" && vzetiPAr4eta !== undefined ){ // seems to work just fine
        let ostavashti = Number(input[index]); 
        index++; 
        brojPar4oci -= ostavashti; 
        // if( brojPar4oci < 0){
        //     break;
        // } 
        // if (vzetiPAr4eta === "STOP"){  
        //     brojPar4oci -= ostavashti;
        //     break;
        // } 
        vzetiPAr4eta = input[index]; 
    }  
    if (brojPar4oci >= 0){
        console.log(`${brojPar4oci} pieces are left.`);
    } else{
        console.log(`No more cake left! You need ${Math.abs(brojPar4oci)} pieces more.`);
    }
} 
cakeBuilder(["10","10","20","20","20","20","21"]); 
cakeBuilder(["10","2","2","4","6","STOP"]); // 100/100 YES WEE 1st try

