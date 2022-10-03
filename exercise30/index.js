let username=['mehmoon','admin','alija','randomuser','Elijah','OReoMaker']

for( let i in username){
   if(username[i].toLowerCase()==='admin'){
      console.log("\nHello admin, would you like to see a status report?\n\n")
   }else{
      console.log("Hello "+username[i]+", thank you for logging in again.")
   }
}