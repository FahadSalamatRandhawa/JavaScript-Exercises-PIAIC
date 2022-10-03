let places=["Japan","Germany","Sweeden","Leximbourg","US"];
console.log(places);

let indexes=[];
for(let i in places){
    indexes.push(places[i].charCodeAt(0));
}
//console.log(indexes)

let alphabeticOrder=(places)=>{
    let min=Math.min(...indexes);
    let count=0;
    while(count<5){
        for(let i in places){
            if(min===places[i].charCodeAt(0)){
                console.log(places[i]);
                count++;
            }
        }
        min++;
        if(count===places.length){
            break;
        }
    }
}
console.log("Alphabetic Order : ");
alphabeticOrder(places)

console.log("Original Array : "+ places);

let reverseAlphabeticOrder=(places)=>{
    let max=Math.max(...indexes);
    let count=0;
   while(count<5){
       for(let i in places){
           if(max===places[i].charCodeAt(0)){
               console.log(places[i]);
               count++;
           }
       }
       max--;
       if(count===places.length){
           break;
       }
   }
}
console.log("Reverse alphabetic array ");
reverseAlphabeticOrder(places)

console.log("Original Array : "+ places);
console.log(places.reverse());
console.log(places.reverse());

let sortAlphabeticOrder=(places)=>{
    let min=Math.min(...indexes);
    let count=0;
    while(count<5){
        for(let i in places){
            if(min===places[i].charCodeAt(0)){
                [places[count],places[i]]=[places[i],places[count]];
                count++;
            }
        }
        min++;
        if(count===places.length){
            break;
        }
    }
}
sortAlphabeticOrder(places);
console.log("Alphabetically list")
console.log(places);

let sortReverseAlphabeticOrder=(places)=>{
    let max=Math.max(...indexes);
    let count=0;
   while(count<5){
       for(let i in places){
           if(max===places[i].charCodeAt(0)){
            [places[count],places[i]]=[places[i],places[count]];
               count++;
           }
       }
       max--;
       if(count===places.length){
           break;
       }
   }
}

sortReverseAlphabeticOrder(places);
console.log("Alphabetically reversed list")
console.log(places);



