/* Мобилен оператор предлага договори с различна месечна такса в зависимост от срока - 1 или 2 години.  
Да се напише програма, която изчислява дължимата сума, която трябва да се плати за определен брой месеци. 
Условия:
•	при добавен мобилен интернет, към таксата за един месец се добавя:
o	при такса по-малка или равна на 10.00 лв.  5.50 лв.
o	при такса по-малка или равна на 30.00 лв.  4.35 лв.
o	при такса по-голяма от 30.00 лв.  3.85 лв.
•	ако договорът e за две години, общата сума се намалява с 3.75%
Вход
От конзолата се четат 3 реда:
1.	Срок на договор – текст – "one", или "two"
2.	Тип на договор – текст – "Small",  "Middle", "Large"или "ExtraLarge"
3.	Добавен мобилен интернет – текст – "yes" или "no"
4.	Брой месеци за плащане - цяло число в интервала [1 … 24]
Изход
На конзолата се отпечатва 1 ред:
•	Цената, която заплаща клиентът, форматирана до втория знак след десетичната запетая, 
в следния формат:  "{цената} lv."

*/ 
function telenorStavaYettel (input){
    let srok = input[0];
    let tipNaDogovora = input[1]; 
    let daNe = input[2]; 
    let broiMeseci = Number(input[3]); 
    let vremecontrackt = 0 ; let cena = 0 ; 
    if(srok === "one"){
        switch (tipNaDogovora){ 
            case "Small" : 
            cena = 9.98; break; 
            case "Middle" : 
            cena = 18.99; break; 
            case "Large" : 
            cena = 25.98; break; 
            case "ExtraLarge" : 
            cena = 35.99; break; 
            default : 
            break ;

        }      
    } else if(srok === "two"){
        switch (tipNaDogovora){ 
            case "Small" : 
            cena = 8.58; break; 
            case "Middle" : 
            cena = 17.09; break; 
            case "Large" : 
            cena = 23.59; break; 
            case "ExtraLarge" : 
            cena = 31.79; break;
            default : 
            break;
        } 
    } 
    let krainaCena = cena * broiMeseci;
    switch(daNe){
        case "yes" :
            if( cena <= 10){
                krainaCena += 5.50*broiMeseci; 
            } else if( cena <= 30){
                krainaCena += 4.35*broiMeseci;
            } else if ( cena > 30){
                krainaCena += 3.85*broiMeseci; 
            } 
            
            if (srok === "two"){
                krainaCena *= 0.9625;
            } 
            
            console.log(`${krainaCena.toFixed(2)} lv.`);
            break; 
            
        case "no" : 
        if (srok === "two"){
            krainaCena *= 0.9625;
        } else{ 
        krainaCena = cena * broiMeseci; 
        }
        console.log(`${krainaCena.toFixed(2)} lv.`); break; 
        default : 
        break; 
    }
} 
telenorStavaYettel (["one" , "Small" , "yes" , "10"]); // seems to work , but IDK for sure 
telenorStavaYettel (["two" , "Large" , "no" , "10"]); // 1st try 40 / 100 not bad at all xdd 
telenorStavaYettel (["two" , "ExtraLarge" , "yes" , "20"]); // 3rd try 100/100 
telenorStavaYettel (["two" , "Small" , "yes" , "20"]);