/* Напишете функция, която получава  две цели числа (N1 и N2) и оператор, с който да се извърши 
дадена математическа операция с тях. Възможните операции са: Събиране(+), Изваждане(-), Умножение(*), 
Деление(/) и Модулно деление(%). При събиране, изваждане и умножение на конзолата трябва да се 
отпечатат резултата и дали той е четен или нечетен. При обикновеното деление – резултата. 
При модулното деление – остатъка. Трябва да се има предвид, че делителят може да е равен на 0(нула), 
а на нула не се дели. В този случай трябва да се отпечата специално съобщениe.
Вход
Приемат се 3 аргумента,:
•	N1 – цяло число в интервала [0...40 000]
•	N2 – цяло число в интервала [0...40 000]
•	Оператор – един символ измежду: "+", "-", "*", "/", "%"
Изход
Да се отпечата на конзолата един ред:
•	Ако операцията е събиране, изваждане или умножение:
o	 "{N1} {оператор} {N2} = {резултат} – {even/odd}"
•	Ако операцията е деление:
o	"{N1} / {N2} = {резултат}" – резултатът е форматиран до вторият знак след дес.запетая
•	Ако операцията е модулно деление: 
o	"{N1} % {N2} = {остатък}"
•	В случай на деление с 0(нула): 
o	"Cannot divide {N1} by zero"
 */ 
function operations(input){
    let numberOne = Number(input[0]); 
    let numberTwo = Number(input[1]); 
    let symbol = input[2]; 
    let result = 0; 
    let even = "even"; 
    let odd = "odd" ; 
    let meow = ""
    
     switch (symbol){
            case "+" : 
            result = numberOne + numberTwo; 
            if(result % 2 === 0){  
                meow = even;
            console.log(`${numberOne} ${symbol} ${numberTwo} = ${result} - ${meow}`);  
            } else { 
                meow = odd;
                console.log(`${numberOne} ${symbol} ${numberTwo} = ${result} - ${meow}`);
            } 
            break;  
            
            case "-" : 
            result = numberOne - numberTwo; 
            if(result % 2 === 0){  
                meow = even;
            console.log(`${numberOne} ${symbol} ${numberTwo} = ${result} - ${meow}`);  
            } else { 
                meow = odd;
                console.log(`${numberOne} ${symbol} ${numberTwo} = ${result} - ${meow}`);
            } 
            break; 
            
            case "*" : 
            result = numberOne * numberTwo; 
            if(result % 2 === 0){  
                meow = even;
            console.log(`${numberOne} ${symbol} ${numberTwo} = ${result} - ${meow}`);  
            } else { 
                meow = odd;
                console.log(`${numberOne} ${symbol} ${numberTwo} = ${result} - ${meow}`);
            } 
            break;

        } 
     switch (symbol){
        case "/" : 
        if(numberTwo == 0){
            console.log(`Cannot divide ${numberOne} by zero`); 
        } else{
        result = numberOne / numberTwo;
        console.log(`${numberOne} / ${numberTwo} = ${result.toFixed(2)}`); 
        }
        break; 
        case "%" : 
        if(numberTwo == 0){
            console.log(`Cannot divide ${numberOne} by zero`); 
        } else{
        result = numberOne % numberTwo;
        console.log(`${numberOne} % ${numberTwo} = ${result}`); 
        }
        break;
    }
} //100 /100 2nd try ;lkk 1st: 82/100
operations(["10","11","+"]);
