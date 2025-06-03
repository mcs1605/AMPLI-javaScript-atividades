//LAÇO DE REPETIÇÃO
for(i = 0; i < 6; i = i + 1){
    console.log(i);
}
console.log("\n");

//PÁRA ANTES DO NÚMERO DA CONDIÇÃO
for(i = 0; i < 6; i = i + 1){
    if(i == 2){
        break;
    }
    console.log(i);
}
console.log("\n");

//PULA O NÚMERO DA CONDIÇÃO
for(i = 0; i < 6; i = i + 1){
    if(i == 2){
        continue;
    }
    console.log(i);
} 

//LAÇO WHILE
i = 0 //precisa declarar um start

while(i <= 5){
    console.log(i);
    i++;
}


//DO WHILE
//exemplo 1:
i = 0 //precisa declarar um start

do{
    console.log(i);
    i++;
}
while(i < 5); //condição de parada depois de executar ao menos uma vez o "DO"

//exemplo 2:
i = 10;

do{
    console.log(i);
    i++;
}
while(i < 5);