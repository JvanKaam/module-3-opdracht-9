/*
Try this: 
var folks = [“Person1”, “Person2”, “Person3”, “Person4”, “Person5”]; 
var y = 0; 
while(y < folks.length) { 
    console.log(folks[i]); 
    y++; 
}

OR ALSO THIS:

var folks = [“Person1”, “Person2”, “Person3”, “Person4”, “Person5”]; 
var y = 0; 
while(y < folks.length) { 
    for (var i =0; i<folks.length; i++) { 
        console.log(folks[i]) 
        y++; 
    } 
}

*/



let colors = ['yellow', 'blue', 'red', 'orange'];
let y=0;


while (y < colors.length) {
    console.log(colors[y]);
    y++;
}


for (y=0; y < colors.length; y++) {
    console.log(colors[y]);
}


colors.forEach(element => console.log(element));



/*
1. for: 5 regels
while: 6 regels
2. 2 regels 
3. je kan niet vast komen te zitten in een loop. Het is dat het niet loopt though. Je gaat er 1x doorheen. Dus als dat genoeg is, dan is dit veel handiger. For loop is makkelijker leesbaar dan while loop. For each maybe nu nog niet zo erg duidelijk. Ik snap wat er gebeurt wanneer een for each staat. maar de syntax erna nog niet zo goed. 
4. nee. ik denk omdat je door een array wel door objecten kan gaan, maar niet met for each door de properties van de objecten. 




*/