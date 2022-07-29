function wordreader (input){
    let index = 0; 
    let reader = input[index]; 
    index++; 
    while( reader !== "Stop"){
        console.log(reader);
        reader = input[index];
        index++; 
    } 
} 
wordreader (["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);
// 100/100 si,ezzs