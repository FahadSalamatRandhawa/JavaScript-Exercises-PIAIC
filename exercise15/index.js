let guestList=["Nikola Tesla","Iqbal","Mehmet the II"];

for(let i in guestList){
    console.log(" I would like to invite you to a dinner : "+guestList[i]);
}

console.log("Mehmet cannot make it");

guestList.pop();guestList.push("Cesar");

for(let i in guestList){
    console.log(" I would like to invite you to a dinner : "+guestList[i]);
}