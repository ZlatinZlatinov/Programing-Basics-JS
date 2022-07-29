function library (input){
    let index = 0; 
    let searchedBook = input[index]; 
    index++; 
    let bookCounter = 0;  
    while( searchedBook !== "No More Books"){
        let currentBook = input[index+1];  
        bookCounter ++;
        if (currentBook === searchedBook){ 
            console.log(`You checked ${bookCounter} books and found it.`);  
            break;
        } 
        if (currentBook === "No More Books"){
            console.log(`The book you search is not here!`); 
            console.log(`You checked ${bookCounter} books.`); 
            break;
        }
        index++;  
    } 
} // 90/100 дава ама някъде отива в безкраен цикъл ддз.. не може, тряа се напрай с булева променлива хдд
//library(["Troy","Stronger","Life Style","Troy"]); 
//library(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]); 
library(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"]);

// function vtoriOpit (input){  // 100/100
//     let favouriteBook = input[0];
//     let index = 1; 
//     let bookIsFound = false;  
//     let nextBookName = input[index]; 
//     while (nextBookName !== "No More Books"){
//         if( nextBookName === favouriteBook){
//             bookIsFound = true; 
//             break; 
//         } 
//         index++; 
//         nextBookName = input[index];
//     } 
//     if (bookIsFound === false){
//         console.log(`The book you search is not here!`); 
//         console.log(`You checked ${index - 1} books.`); 
//     } else {
//         console.log(`You checked ${index - 1} books and found it.`); 
//     }
// } те така дава 100 ама треа с боолеан да е, не може , проверява го хддд

