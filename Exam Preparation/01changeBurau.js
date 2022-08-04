function buro (input){
    const btc = 1168 //lv 
    const uan = 0.15 // usd 
    const dollar = 1.76 // lv 
    const euro = 1.95 // lv 
    let btcCount = Number(input[0]); 
    let uanCount = Number(input[1]); 
    let commision = Number(input[2]); 
    let btcToeuro = (btc * btcCount) / euro; 
    let uanTolv = (uan * uanCount) * dollar;  
    let toEuro = ((btc * btcCount) + uanTolv) / euro; 
    let totalSum = toEuro - toEuro * (commision / 100);
    console.log(`${totalSum.toFixed(2)}`);
} // 100 / 100 
buro(["1" , "5" , "5"]);