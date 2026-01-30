let dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sabado","Domingo"]

for(let i=0;i<dias.length;i++){
    document.writeln(dias[i]+"<br>")
}

document.writeln("<ol>");

for(let i=0;i<dias.length;i++){
    document.writeln("<li>"+dias[i]+"</li>")
}

document.writeln("</ol>");