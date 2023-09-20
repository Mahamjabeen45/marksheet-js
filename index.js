var name="Name";
var urdu="Urdu";
var maths="Maths";
var eng="Eng";
var total="Total";
var percentage="Percentage";

var name1="Hamza";
var urdu1=66;
var maths1=86;
var eng1=70;
var total1= urdu1+maths1+eng1;
var percentage1= total1*100/300;

var name2="Ali";
var urdu2=77;
var maths2=69;
var eng2=82;
var total2= urdu2+maths2+eng2;
var percentage2= total2*100/300;

document.write(
    "<table border='1'>"+
    "<tr>"+"<th>"+name +"</th>"+
    "<th>"+urdu +"</th>"+
    "<th>"+maths+"</th>"+
    "<th>"+eng+"</th>"+
    "<th>"+total+"</th>"+
    "<th>"+percentage+ "</th>"+"</tr>"

    +"<tr>"+"<td>"+name1 +"</td>"+
    "<td>"+urdu1 +"</td>"+
    "<td>"+maths1+"</td>"+
    "<td>"+eng1+"</td>"+
    "<td>"+total1+"</td>"+
    "<td>"+percentage1 +"%"+"</td>"+"</tr>"

    +"<tr>"+"<td>"+name2+"</td>"+
    "<td>"+urdu2 +"</td>"+
    "<td>"+maths2+"</td>"+
    "<td>"+eng2+"</td>"+
    "<td>"+total2+"</td>"+
    "<td>"+percentage2 +"%"+ "</td>"+"</tr>"

    +"</table>"
)