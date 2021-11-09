
const colors=["white","blue","red","aqua","marineblue","purple","green"];
document.getElementById("i1").innerHTML=colors;
colors.pop();
document.getElementById("i2").innerHTML=colors;
colors.push("black");
document.getElementById("i3").innerHTML=colors;
colors.shift();
document.getElementById("i4").innerHTML=colors;
colors.unshift("darkgrey");
document.getElementById("i5").innerHTML=colors;