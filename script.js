var str1 = "Dominick";
var str2 = "Valente";

var name = str1 + str2;

document.getElementById("myname").innerHTML = name;
console.log(name);

var str3 = "14654";

console.log(str3);
document.getElementById("total1").innerHTML = str3;

var total = "14654" * "3";

console.log(total);
document.getElementById("total2").innerHTML = total;

var JavaScriptIsCool = true;

var colors = "red yellow blue green";

var text = "";
var i = 1;
while (i <= 5) {
  text += " " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;
console.log(text);

var text = "";
var i = 0;
while (i <= 4) {
  text += " " + i;
  i++;
}
document.getElementById("demo2").innerHTML = text;
console.log(text);
