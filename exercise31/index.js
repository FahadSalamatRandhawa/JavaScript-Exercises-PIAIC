let username=[]

if(username.length===0){
   console.log("We need to find some users");
}else{
   for( let i in username){
      if(username[i].toLowerCase()==='admin'){
         console.log("\nHello admin, would you like to see a status report?\n\n")
      }else{
         console.log("Hello "+username[i]+", thank you for logging in again.")
      }
   }
}