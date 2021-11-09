
const animals=["lion","tiger","elephant","cheetah"];
document.getElementById("id1").innerHTML=animals;
animals.splice(3,0,"cr0codile");
document.getElementById("id2").innerHTML=animals;
animals.splice(2,2,"bear","whale","wolf");
document.getElementById("id3").innerHTML=animals;