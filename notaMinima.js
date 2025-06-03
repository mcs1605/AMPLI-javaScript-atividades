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

//9h da manhã às 17h da tarde
function horarioEntrevista (){
    for(i = 1, i <= 12, i = i + 1){
        console.log(i, "Entrevista {i}")

    }
}

//exemplo
console.log(primeiraEtapa(18,2));