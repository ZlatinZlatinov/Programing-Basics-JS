function parolata (input){
    let index = 0; 
    let username = input[index]; 
    index++; 
    let password = input[index]; 
    index++; 
    let text = input[index]; 
    index++;
    while(text !== password){ 
        text = input[index];
        index++;
    } 
    console.log(`Welcome ${username}!`);
} 
parolata(["Nakov","1234","Pass","1324","1234"]); // 100/100 ezz
