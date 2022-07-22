/*Зад.4 Задание: Напишете функция която сравянява 2 текста/ пароли и отпечатва Wellcome! или Wrong password!*/ 
function guesThePassword(input){
    let parola = input[0]; 
    if (parola === 's3cr3t!P@ssw0rd'){
        console.log('Welcome'); 
    } else{
        console.log('Wrong password!'); 
    }

} 
guesThePassword(["s3cr3t!P@ssw0rd"]); 
// уж работи деа.. тряа само са променят логовете в конзолата 
//  1st try: 66/100 interesting 
// 2nd try: 66/100 сбъркан вход и конзол лог 
// 3rd try 100/100 минава 