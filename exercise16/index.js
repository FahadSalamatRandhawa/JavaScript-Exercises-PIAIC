let guestList=["Nikola Tesla","Iqbal","Mehmet the II"];

for(let i in guestList){
    console.log(" I would like to invite you to a dinner : "+guestList[i]);
}

console.log("\n\nMehmet cannot make it\n\n");

guestList.pop();guestList.push("Cesar");

for(let i in guestList){
    console.log(" I would like to invite you to a dinner : "+guestList[i]);
}

console.log("\n\nI found a bigger table, I am inviting more people\n\n");

guestList.unshift("Quaid");
guestList.splice(guestList.length/2,0,"Julius"); //couldnt find 
guestList.push("Leonidas");

for(let i in guestList){
    console.log(" I would like to invite you to a dinner : "+guestList[i]);
}