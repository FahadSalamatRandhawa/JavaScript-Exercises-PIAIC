let var1='swim'
let var2='fly'
let var3='dive'
let var4='run'
let var5='code'
console.log("True statements\n\n")
let falseList=['flyNo','SwimNo','DriverNo','DiverNo','CodeNo'];
console.log("Is var1=='swim'? I was right");
console.log(var1==='swim')
console.log("Is var2=='fly'? I was right");
console.log(var2==='fly')
console.log("Is var3=='dive'? I was right");
console.log(var3==='dive')
console.log("Is var4=='run'? I was right");
console.log(var4==='run')
console.log("Is var5=='code'? I was right");
console.log(var5==='code')
console.log("\n\nFalse statements\n\n")
for(let i in falseList){
    console.log("Is" +falseList[i]+" a yes statement? I predict False");
    console.log(falseList[i]===/\wyes\w/);
}
