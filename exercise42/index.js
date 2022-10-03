let magicians=['magicianRed','magicianBlack','VoidMagican','magicianDeciple'];

let show_magicians=(array)=>{
   for(let i of array){
      console.log(i);
   }
}
let make_great=(array)=>{
   for(let i in array){
      array[i]='Great '+array[i];
   }
   return array;
}
make_great(magicians);
show_magicians(magicians);