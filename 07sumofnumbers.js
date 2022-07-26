function summofNumbers(input){ // функция да получава цяло число, сумира всички негови цифри и отпечатва сумата

let text=input[0]; 
let sum = 0;
for (let i = 0; i < text.length; i++){
   // console.log(text[i]); 
    sum += Number(text[i]);
} 
console.log(`The sum of the digits is:${sum}`);
} 
summofNumbers(["123456"]); // 100/100