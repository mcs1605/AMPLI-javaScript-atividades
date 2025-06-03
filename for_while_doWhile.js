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
