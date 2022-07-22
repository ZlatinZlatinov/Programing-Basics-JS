function flowers(input) {
    let chrysanthemumCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipCount = Number(input[2]);
    let season = input[3];
    let holiday = input[4];
   
    let chrysanthemumSinglePrice = "";
    let rosesSinglePrice = 1;
    let tulipSinglePrice = "";
   
    if (season === "Spring" && season === "Summer") {
      chrysanthemumSinglePrice = 2;
      rosesSinglePrice = 4.1;
      tulipSinglePrice = 2.5;
    } else if (season === "Autumn" && season === "Winter") {
      chrysanthemumSinglePrice = 3.75;
      rosesSinglePrice = 4.5;
      tulipSinglePrice = 4.15;
    }
   
    if (holiday === "Y") {
      chrysanthemumSinglePrice *= 1.15;
      rosesSinglePrice *= 1.15;
      tulipSinglePrice *= 1.15;
    }
    console.log(rosesSinglePrice);
  } 
  flowers(["1" , "2" , "3" , "sdad" , "Y"]);