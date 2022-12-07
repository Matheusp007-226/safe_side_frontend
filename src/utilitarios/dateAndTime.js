
const formataDia = (dia) =>{
    return dia < 10 ? '0' + dia : dia;
}

const formataDataPadraoBR = (data) =>{

    let data_separada = data.toString();
    console.log('aqui')
    console.log(data_separada)

    let data_array = data_separada.split('-');

    let dataFormatada = data_array[2] + '/'+ data_array[1] + '/' + data_array[0];

    return dataFormatada;
}

const formataDataBanco = (data) => {

    let data_array = data.split('/');

    let data_formatada = data_array[2] +'-'+ data_array[1] + '-' + data_array[0];

    return data_formatada;
}

const dataAtual = () =>{

    let dataAtual = new Date();
    let dataFormatada = formataDia(dataAtual.getDate()) + '/'+ (dataAtual.getMonth() + 1) + '/' + dataAtual.getFullYear();

    return dataFormatada;
}

const tempoAtual = () =>{

    let dataAtual = new Date();
    let tempoFormatado = dataAtual.getHours() + ':'+ dataAtual.getMinutes();

    return tempoFormatado;
}


module.exports = {dataAtual, tempoAtual, formataDataPadraoBR, formataDataBanco};