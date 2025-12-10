const luxuryCar = {type:"Rolls-Royce", model:"Dawn", color:"black", "license num": "DA-23-457690"};

for (key in luxuryCar){
    console.log(key); //dynamic key (property) name
    console.log(luxuryCar[key]); //dynamically print key's values
}

// const smallSUV = {};
// smallSUV.type = "Mazda";
// smallSUV.model = "CX-3";
// smallSUV.color = "red"
// smallSUV["Engine Type"] = "Mazda's  SkyActiv-G 2.0L 4-cylinder; power: 148-154 hp)";
// console.log(smallSUV);

// console.log(smallSUV["Engine Type"]);

