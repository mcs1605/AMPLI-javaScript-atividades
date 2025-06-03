function primeiraEtapa (acertos_na_prova, semestres_cursados){

    const total_de_questoes = 20;
    const nota_minima_aprovacao = 0.7;
    const minimo_semestres = 3;
    let nota = acertos_na_prova / total_de_questoes

    if((nota >= nota_minima_aprovacao) && (semestres_cursados >= minimo_semestres)){
    return "Aprovado";
    }
    else if(nota >= nota_minima_aprovacao){
        return "Você foi incluído em nosso banco de currículos";
    }
    else{
    return "Reprovado";
    }
}

//9h da manhã às 17h da tarde - ENTREVISTAS

var entrada = 9;
var minutos = 15;
var total_entrevistas = 0;
const saida = 17;

for(i = entrada; i < saida; i = i + 1){
    if((i == 12) || (i == 13)){
        continue;
    }
    for(j = 0; j < 60; j = j + minutos){
        total_entrevistas++;
        if(j == 0){
            console.log("Entrevista #", 
                total_entrevistas, "=>", i+":"+j+"0");
        }
        else{
            console.log("Entrevista #",
                total_entrevistas, "=>", i+":"+j);

        }
    }
}