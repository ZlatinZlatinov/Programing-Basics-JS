function pinCode (input){ 
    let numA = Number(input[0]); 
    let numB = Number(input[1]); 
    let numC = Number(input[2]); 
    let printer = '';
    for (let x = 1; x <= numA; x++){
      for(let y = 1; y <= numB; y++){
          for(let z = 1; z <= numC; z++){
              if(x % 2 === 0 && z % 2 === 0 && (y === 2 || y === 3 || y === 5 || y === 7)){
                  printer += "" + x + y + z + " "; 
                  console.log(`${x} ${y} ${z}`);
              }
          }
      }
    }
    //console.log(printer);
} // 100 / 100 wooo /// 100/100 2puti wee 08 e su6tata secret doors lock
pinCode(["3" , "5" , "5"]);