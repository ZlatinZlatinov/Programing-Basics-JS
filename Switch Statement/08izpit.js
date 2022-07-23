/* Студент трябва да отиде на изпит в определен час (например в 9:30 часа). Той идва в изпитната 
зала в даден час на пристигане (например 9:40). Счита се, че студентът е дошъл навреме, ако е 
пристигнал в часа на изпита или до половин час преди това. Ако е пристигнал по-рано повече от 30 минути, 
той е подранил. Ако е дошъл след часа на изпита, той е закъснял. Напишете функция, която получава време 
на изпит и време на пристигане и отпечатва дали студентът е дошъл навреме, дали е подранил или е закъснял 
и с колко часа или минути е подранил или закъснял.
Вход
Приемат се 4 аргумента:
•	Първият съдържа час на изпита – цяло число от 0 до 23.
•	Вторият съдържа минута на изпита – цяло число от 0 до 59.
•	Третият съдържа час на пристигане – цяло число от 0 до 23.
•	Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.
Изход
На първият ред отпечатайте:
•	"Late", ако студентът пристига по-късно от часа на изпита.
•	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
•	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
•	"mm minutes before the start" за идване по-рано с по-малко от 1.
•	"hh:mm hours before the start" за подраняване с 1 час или повече. 
Минутите винаги печатайте с 2 цифри, например "1:05".
•	 "mm minutes after the start" за закъснение под час.
•	"hh:mm hours after the start" за закъснение от 1 час или повече. 
Минутите винаги печатайте с 2 цифри, например "1:03".
 */ 
function izpitTime (input){
    let chasIzpita = Number(input[0]); 
    let minutaIzpita = Number(input[1]); 
    let arrivalHour = Number(input[2]); 
    let arrivalMin = Number(input[3]); 
    const allMinutesStart = chasIzpita*60 + minutaIzpita; // входните данни за старт на изпита превърнати само в минути
    const allMunitesArive = arrivalHour*60 + arrivalMin; // входни данни за пристигане в минути 
    if ( allMinutesStart < allMunitesArive){ 
        console.log("Late");
        let zakusnenie = allMunitesArive - allMinutesStart;  
        if(zakusnenie < 60){
            console.log(`${zakusnenie} minutes after the start`) 
        }else if (zakusnenie == 60){
                let pechatH = zakusnenie / 60; 
                console.log(`${pechatH}:00 hours after the start`)
              
        }else if(zakusnenie > 60){
        let pechatH = Math.floor(zakusnenie / 60); 
        let pechatM = (zakusnenie % 60); 
          if (pechatM < 10){
            console.log(`${pechatH}:0${pechatM} hours after the start`)   
          } else{
            console.log(`${pechatH}:${pechatM} hours after the start`); 
        }  
    }
    
    
     }else if ( allMinutesStart > allMunitesArive){ 
        
        let podranqvane = allMinutesStart - allMunitesArive; 
          if(podranqvane <= 30){
            console.log("On time"); 
          } else{
            console.log("Early");
          } 
          if(podranqvane < 60){
            console.log(`${podranqvane} minutes before the start`)  
          }else if (podranqvane == 60){
            let pechatH = podranqvane / 60; 
            console.log(`${pechatH}:00 hours before the start`)
          }
          else{
        let pechatH = Math.floor(podranqvane / 60); 
        let pechatM = (podranqvane % 60); 
             if (pechatM < 10){
            console.log(`${pechatH}:0${pechatM} hours before the start`); 
             }else{
                console.log(`${pechatH}:${pechatM} hours before the start`);
            }
        }  
    } else if ( allMinutesStart == allMunitesArive){ 
        console.log("On time"); 
    }
       
} 

 
izpitTime(["16","00","15","00"]);  // 100/100 amaaa pravopisni grshki i skapana logika xdd
// eemiii 81/100 close  
// i tva dolu dava 81/100 close
/* function izpitTime (input){
    let chasIzpita = Number(input[0]); 
    let minutaIzpita = Number(input[1]); 
    let arrivalHour = Number(input[2]); 
    let arrivalMin = Number(input[3]); 
    const allMinutesStart = chasIzpita*60 + minutaIzpita; 
    const allMunitesArive = arrivalHour*60 + arrivalMin; 
    if ( allMinutesStart < allMunitesArive){ 
        console.log("Late");
        let zakusnenie = allMunitesArive - allMinutesStart;  
        if(zakusnenie < 60){
            console.log(`${zakusnenie} minutes after the start`)
        }else{
        let pechatH = Math.floor(zakusnenie / 60); 
        let pechatM = (zakusnenie % 60); 
          if (pechatM < 10){
            console.log(`${pechatH}:0${pechatM} hours after the start`)   
          } else{
            console.log(`${pechatH}:${pechatM} hours after the start`); 
        } 
    }
        
     }else if ( allMinutesStart > allMunitesArive){ 
        
        let podranqvane = allMinutesStart - allMunitesArive; 
          if(podranqvane <= 30){
            console.log("On time"); 
          } else{
            console.log("Early");
          } 
          if(podranqvane < 60){
            console.log(`${podranqvane} minutes before the start`) 
          }else{
        let pechatH = Math.floor(podranqvane / 60); 
        let pechatM = (podranqvane % 60); 
             if (pechatM < 10){
            console.log(`${pechatH}:0${pechatM} minutes before the start`); 
             }else{
                console.log(`${pechatH}:${pechatM} hours before the start`);
            }
        } 
    } else if ( allMinutesStart == allMunitesArive){ 
        console.log("On time");
        
    }
}  */
