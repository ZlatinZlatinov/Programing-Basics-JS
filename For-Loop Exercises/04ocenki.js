function belejnik (input){
    let index = 0; 
    let studentsCount = Number(input[index]); 
    index++; let r1TopTudents = 0; let r2Between4Students = 0; 
    let r3Between3Students = 0; let r4FailedStudents = 0; //let r5Average = 0; 
    let sumOfStudentsScore = 0; 
    for (let i = 1; i<=studentsCount; i++){
        sumOfStudentsScore += Number(input[i]); // e tva sumira ako ima chisla v masiva im namira sbora na vsi4ki
        let grades = Number(input[index]); // e s tva se obhojda vseki edin element ot masiva 
        index++; // ++ tva , zapp4va ot 1vi element 0 go preska4a zaradi ++
        if ( grades < 3){
            r4FailedStudents++; 
            //r5Average += grades;
        } else if ( grades >= 3 && grades < 4){
            r3Between3Students ++; 
            //r5Average += grades; 
        } else if ( grades >=4 && grades < 5 ){
            r2Between4Students ++; 
            //r5Average +=grades;
        }else if (grades >= 5){
            r1TopTudents++; 
            //r5Average +=grades;
        }

    }  
    let r4Percentage = r4FailedStudents / studentsCount * 100;
    let r3Percentage = r3Between3Students / studentsCount * 100; 
    let r2Percenage = r2Between4Students / studentsCount * 100; 
    let r1Percentage = r1TopTudents / studentsCount * 100; 
    let averageScore = sumOfStudentsScore / studentsCount; 
    console.log(`Top students: ${r1Percentage.toFixed(2)}%`); 
    console.log(`Between 4.00 and 4.99: ${r2Percenage.toFixed(2)}%`); 
    console.log(`Between 3.00 and 3.99: ${r3Percentage.toFixed(2)}%`); 
    console.log(`Fail: ${r4Percentage.toFixed(2)}%`); 
    console.log(`Average: ${averageScore.toFixed(2)}`);

} 
//belejnik([10 3.00 2.99 5.68 3.01 4 4 6.00 4.50 2.44 5 ]);  // 100/100 1st try lol
belejnik (["10" , "3.00" , "2.99" , "5.68" , "3.01" , "4" , "4" , "6.00" , "4.50" , "2.44" , "5"]);