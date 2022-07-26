function ciklene(){
    // for(let i = 1; i <=12; i+=1){ // цикъл отпечатва числата от 1 до 12 включително;
    //     console.log(i);
    // }
let text = "SoftUni" ; 
for(let i = 0 /*text.charAt(0)*/; i<= text.length; i++){
    console.log(text.charAt(i)); // понеже е цикъл и ако напиша само charAt(0) ще взима само 0-вия индекс 
    // а ако се напише .charAt(i) - понеже си дефинирано i = 0 започва от 0вия индекс на текст, 
    // върти се толкова пъти колкото е зададено в text.length и в consolelog се отпечатва charAt i, 
    // като с всеки цикъл i променя своята стойност докато стане <= на text.length
}

} 
ciklene();