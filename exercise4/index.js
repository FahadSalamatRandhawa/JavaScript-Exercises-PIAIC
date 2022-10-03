let name="Maester Aemon";
let quote='"Love is the death of duty."';

let sayQuote=(name,quote)=>{
    
    return `${name} once said, ${quote}`;
}
document.getElementById("quote").innerHTML=sayQuote(name,quote);
console.log(sayQuote(name,quote));
