
let principle=2000;
let rate=0.8;
let time=2;
let simpleinterest= `simpleinterest: ${(principle*rate*time).toFixed(2)}`;
document.getElementById("a1").innerText=simpleinterest;
let totalamount= `totalamount: ${(principle*(1+rate*time)).toFixed(2)}`;
document.getElementById("a2").innerText=totalamount;
