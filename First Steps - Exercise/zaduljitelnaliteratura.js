/*Задание: За лятната ваканция в списъка със задължителна литература на Жоро има 
определен брой книги. Понеже Жоро предпочита да играе с приятели навън, вашата 
задача е да му помогнете да изчисли колко часа на ден трябва да отделя, за да прочете необходимата литература.
Вход
От конзолата се четат 3 реда:
1.	Брой страници в текущата книга – цяло число в интервала [1…1000]
2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]
Изход
Да се отпечата на конзолата броят часове, които Жоро трябва да отделя за четене всеки ден.
*/ 
// потребителски вход: ["212 ","20 ","2 "] 
function literatura(input){
    let strCurrentBook = Number(input[0]); 
    let strPerHour = Number(input[1]); 
    let daysNeeded = Number(input[2]); 
    const neobhodimiHours = strCurrentBook / strPerHour ; 
    const result = neobhodimiHours / daysNeeded ;
    console.log(result); 

}
literatura(["212" , "20" , "2"]); 
// сигурно ше мине ама после може да са напрай да го показва и 5часа и 20 +/- минути на ден ще му трябват