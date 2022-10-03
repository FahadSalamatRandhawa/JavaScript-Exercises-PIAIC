let magicians=['magicianRed','magicianBlack','VoidMagican','magicianDeciple'];

let show_magicians=(array)=>{
   for(let i of array){
      console.log(i);
   }
}
let make_great=(temp)=>{
   for(let i in temp){
      temp[i]='Great '+temp[i];
   }
   return temp;
}

let copyMagicians=(make_great(new Array(...magicians)));
console.log("Original");
show_magicians(magicians);
console.log("\n\nCopy");
show_magicians(copyMagicians);