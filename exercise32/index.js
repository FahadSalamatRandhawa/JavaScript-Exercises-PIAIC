let current=['mehmoon','admin','alija','randomuser','Elijah','OReoMaker']
let newUsers=['alIja','newUser1','admin','newUser9','newUser22']
for( let i in newUsers){
   if(current.includes(newUsers[i].toLowerCase())){
      console.log(newUsers[i]+" is not available, please enter a new username")
   }else{
      console.log(newUsers[i]+" is avaialable")
   }
}