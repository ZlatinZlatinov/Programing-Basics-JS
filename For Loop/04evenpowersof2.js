function evenPowersOfTwo(input){ // да се напише програма, която получава число и отпечатва четни степените на числото 2 с него;  
    let num = Number(input[0]); 
    let a= 1;
    for(let i=0; i <=num ; i+=2){ 
        console.log(a) 
        a = a*2*2;
    }

}  // печата 2^0 ; 2^2 ; 2^4 ; 2^6 ... do N
evenPowersOfTwo(["6"]); // 100/100