function zaplata (input){ 
    let index = 0;
    let openTabsCount = Number(input[index]); 
    index ++; 
    let money = Number(input[index]); 
    index ++; 
    let isHaveSallary = true;
    for (let i = 0; i <= openTabsCount; i++){
        let currentTab = input[index];
        index ++; 
        if (currentTab === "Facebook"){
            money -= 150; 
        } else if (currentTab === "Instagram"){
            money -= 100; 
        } else if (currentTab === "Reddit"){
            money -= 50; 
        } 
        if (money <= 0){
            console.log("You have lost your salary."); 
            isHaveSallary = false;
            break;
        }
    } 
    if (isHaveSallary){
        console.log(`${money}`);
    } 
} 
zaplata (["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]); 
zaplata (["3","500","Github.com","Stackoverflow.com","softuni.bg"]); // 100/100
zaplata (["3","500","Facebook","Stackoverflow.com","softuni.bg"]);


