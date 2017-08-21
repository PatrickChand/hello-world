var height = "about 5'10\" tall";
alert(height)

if (1 > 2){
alert("The world has gone mad!");
} else {
alert("All is well with the world");
}

var count = 1;
while(count < 4){
alert(count);
count++;
}

function shout(){
var beatles = Array('J', 'P', 'G', 'R');
for(var count = 0; count < beatles.length; count++){
alert(beatles[count]);
}
}

shout()

function convert(temp){
var result = temp - 32;
result = result / 1.8;
return result;
}

alert(convert(95))

alert(typeof document.getElementById("purchases"));

var items = document.getElementsByTagName("li");
for(var i=0; i<items.length; i++){
  alert(typeof items[i]);
}

var paras = document.getElementsByTagName("p");
for(var i=0; i<paras.length; i++){
  alert(paras[i].getAttribute("title"));
}