function movies (input){ 
    let countOfMovies = Number(input[0]); 
    let index = 1; 
    let command = 0;
    // let movieName = input[index]; 
    // index++; 
    // let movieRating = input[index]; 
    let max = 0; let avg = 0; let min = 50; 
    let maxCounter = 0; let minCounter = 0;
    while(command < countOfMovies){
        command++; 
        let movieName = input[index];  
        index++; 
        let movieRating = Number(input[index]); 
        avg += movieRating; 
        index++;  
        //avg += movieRating;
        if(movieRating >= max){ // moje i bez = , pak 83
            max = movieRating; 
            maxCounter = movieName;
        } else if ( movieRating <= min){ // moje i bez =
            min = movieRating; 
            minCounter = movieName;
        }    
    } 
    let average = avg / countOfMovies; 
    console.log(`${maxCounter} is with highest rating: ${max}`); 
    console.log(`${minCounter} is with lowest rating: ${min}`); 
    console.log(`Average rating: ${average.toFixed(1)}`)

} // 83 / 100  jujde
movies(["5" , "A Star is Born" , "7.8" , "Creed 2" , "7.3" , "Mary Poppins" , "7.2" , "Vice" , "7.2" , "Captain Marvel" , "7.1"]); 
//A Star is Born7.8Creed 27.3Mary Poppins7.2Vice7.2Captain Marvel7.1