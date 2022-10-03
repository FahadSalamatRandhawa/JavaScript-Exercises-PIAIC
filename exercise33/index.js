let ordinalNumbers=[1,2,3,4,5,6,7,8,9];

for(let i in ordinalNumbers){
   if(ordinalNumbers[i]===1){
      console.log(ordinalNumbers[i]+"st\n")
   }else if(ordinalNumbers[i]===2){
      console.log(ordinalNumbers[i]+"nd\n")
   }else if(ordinalNumbers[i]===3){
      console.log(ordinalNumbers[i]+"rd\n")
   }else{
      console.log(ordinalNumbers[i]+"th\n")
   }
}