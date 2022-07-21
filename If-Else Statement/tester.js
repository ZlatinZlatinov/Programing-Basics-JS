/*викам тука си тествам някви работи уж*/  
// туй за задача 3 време + 15 минути хдд
function testerPro (input){
  let hours = Number(input[0]); 
  let minutes = Number(input[1]); 
  const allInMunites = hours*60 + minutes + 15; 
  totalHours = Math.floor(allInMunites / 60); 
  totalMinutes = allInMunites % 60; 
  if (totalHours === 24){
      totalHours = 0;
  }
  if (totalMinutes < 10){ 
      console.log(`${totalHours}:0${totalMinutes}`);
  } else{
    console.log(`${totalHours}:${totalMinutes}`);
  }

} 
testerPro(["0" , "01"]); //  23 45 не работи
// има значение в приоретизацята , кога ще се изпълняват действията 
// програмата се изпълнява от ляво на дясно и действия като ъмножение, деление , скоби са с проритет