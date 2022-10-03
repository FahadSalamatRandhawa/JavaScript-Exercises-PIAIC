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

console.log("\n\nSorry mate, I can only invite 2 people for now\n\n");

for(let i=guestList.length;i>2;i--){
    console.log(guestList.pop()+" Sorry mate, I cannot invite you for now");
}
for(let i in guestList){
    console.log(guestList[i]+" : You are still invited")
}
for(let i=guestList.length;i>0;i--){
    guestList.pop();
}

console.log(guestList);