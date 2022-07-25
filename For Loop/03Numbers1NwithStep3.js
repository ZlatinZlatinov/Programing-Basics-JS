function numbers1NwithStep3(input){
let num = Number(input[0]); 
for (let i = 1; i <= num; i+=3){ // отпечатва числата 1 до Num през 3 ; 1, 4, 7,10 ... до Num(input)
    console.log(i);
}
} 
numbers1NwithStep3(["30"]);