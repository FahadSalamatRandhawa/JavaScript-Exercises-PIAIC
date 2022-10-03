let items={};
while(1){
    let prop=prompt("Property for Obj? Null to finish");
    let value=prompt("Laue for property? Null to finish");
    items[prop]=value;
    console.log(items);
    if(prop==null||value==null){break;}
}


