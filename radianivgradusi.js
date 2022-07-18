/*Задание: Напишете програма, която чете ъгъл в радиани (десетично число) 
и го преобразува в градуси. Използвайте формулата: градус = радиан * 180 / π. 
Числото π в JavaScript програми е достъпно чрез Math.PI.*/ 
// потребителски вход: 3.1416 
function radToDegrees (input){
    let rad = Number(input[0]); 
    const gradusi = rad * 180/Math.PI ;
    console.log(gradusi);
} 
radToDegrees(["3.1416"]) 
// 1001010101