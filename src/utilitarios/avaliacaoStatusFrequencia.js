

const frequencia = (numero) => {

    let frequencia = '';

    if(numero <= 1){

        frequencia = 'Muito raro';

    }else if(numero <= 3){

        frequencia = 'Levemente habitual';

    }else if(numero <= 5){

        frequencia = 'Frequente';

    }else{

        frequencia = 'Extremamente frequente';

    }

    return frequencia;

}


const status = (numero) => {

    let status = '';

    if(numero <= 1){

        status = 'Baixo indice de risco';

    }else if(numero <= 3){
        
        status = 'Perigo moderado';

    }else if(numero <= 5){

        status = 'Muito perigoso';

    }else{

        status = 'Perigo extremo!'
    }

    return status;
}


const avaliacao = (numero) => {

    if(numero <= 30){

    }else if(numero <= 70){

    }else if(numero <= 140){

    }else{
        
    }

}

module.exports = {frequencia, status, avaliacao};