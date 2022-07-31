function kashonBuilder(input){ 
    let daljina = Number(input[0]); 
    let shirina = Number(input[1]);  
    let visochina = Number(input[2]);
    let brojPar4oci = daljina * shirina * visochina; // broika6oni
    let index = 3; 
    let vzetiPAr4eta = input[index]; // vzetika6oni
    while (vzetiPAr4eta !== "Done" ){
        let ostavashti = Number(input[index]); 
        index++; 
        brojPar4oci -= ostavashti; 
        if( brojPar4oci < 0){
            break;
        } 
        if (vzetiPAr4eta === "Done"){  
            brojPar4oci -= ostavashti;
            break;
        } 
        vzetiPAr4eta = input[index]; 
    }  
    if (brojPar4oci >= 0){
        console.log(`${brojPar4oci} Cubic meters left.`);
    } else{
        console.log(`No more free space! You need ${Math.abs(brojPar4oci)} Cubic meters more.`);
    }
} 
kashonBuilder(["10", "10","2","20","20","20","20","122"]); 
kashonBuilder(["10", "1","2","4", "6","Done"]); // 100/100 ezz

