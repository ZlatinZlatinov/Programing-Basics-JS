/* Задание: Напишете програма, която чете от конзолата число r и пресмята и отпечатва лицето и 
периметъра на кръг / окръжност с радиус r, като форматирате изхода в следния вид: "<calculated area>" 
"<calculated parameter>". Форматирайте изходните данни до втория знак след десетичната запетая.
*/ 
function liceNaKrag(input){
    // формула за обиколка на окръжност 2.пи.р 
    // формула за лице на окръжност с= пи по р на кв 
    let radius = Number(input[0])
    const obikolka = 2 * radius * Math.PI; 
    const lice = Math.PI * radius * radius; 
    console.log(parseFloat(obikolka).toFixed(2));
    console.log(parseFloat(lice).toFixed(2));

} 
liceNaKrag(["3"]);