let make_album=(artistName,albumTitle,tracks=null)=>{
   if(tracks===null){
       return album={'Artist Name':artistName,'Album Title':albumTitle};
   }else{
      return album={'Artist Name':artistName,'Album Title':albumTitle,'Tracks':tracks};
   }
}

console.log(make_album('Burn it','Feddy Mercury'))
console.log(make_album('Bhemian','50 hits'))
console.log(make_album('Snoop Dawg','Old school'))
console.log(make_album('Prismo','Destiny',10));