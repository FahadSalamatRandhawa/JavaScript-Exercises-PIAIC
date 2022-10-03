let cars=(manufacturer,modle,...agrs)=>{
   let car={Manufacturer:manufacturer,Modle:modle};
   for(let i=0;i<agrs.length;i+=2){
      car[agrs[i]]=agrs[i+1];
   }
   return car;
}

let newCar=cars('toyota','2022','name','civic','color','red')
console.log(newCar);
newCar=cars('Niisan','2020','Name','GTR','Engine','2.8','color','grey')
console.log(newCar);