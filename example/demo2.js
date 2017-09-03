function insertParagraph(text){
  var str = "<p>";
  str += text;
  str += "</p>";
  document.write(str);
}

insertParagraph("This is inserted.")

window.onload = function(){
  var testdiv = document.getElementById("testdiv");
//  alert(testdiv.innerHTML);
  testdiv.innerHTML = "<p>I inserted <em>This</em> content.</p>";

  var para = document.createElement("p");
  testdiv.appendChild(para);
  var txt = document.createTextNode("Hello world");
  para.appendChild(txt);
  var info = "nodeName: ";
  info += para.nodeName;
  info += " nodeType: ";
  info += para.nodeType;
  alert(info);
}
