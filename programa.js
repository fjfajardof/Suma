var i=[]
function suma(){
var k= parseInt(document.getElementById("x").value);
if (k!=0){
    i.push(k);
    
    
}

if (k==0){
var y=0;
var sum=0;
for (j = 0; j < i.length; j++) {
    var z= i[y];
    sum= sum + z;
    y++;
    

}

var prom=(sum/(y));
document.writeln("Promedio: "+ prom + " Suma: " + sum);

}

}