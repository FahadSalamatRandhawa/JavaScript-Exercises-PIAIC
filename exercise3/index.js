let toTitleCase=(str)=>{
    return str.replace(/\w\S*/g,function(str){return str.charAt(0).toUpperCase()+str.substr(1)});
};

let name="sonic nawab";  //default value store

//name=prompt("Please tell me your name","sonic"); //incase you want to take input

console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(toTitleCase(name));
//console.log(toTitleCase(name))
document.getElementById('lowerCase').innerHTML = name.toLowerCase();
document.getElementById('upperCase').innerHTML = name.toUpperCase();
document.getElementById('titleCase').innerHTML = toTitleCase(name);