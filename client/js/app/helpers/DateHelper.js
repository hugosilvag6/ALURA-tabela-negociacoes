class DateHelper {
    constructor(){
        throw new Error ('DateHelper não deve ser instanciado.')
    }
    static textoParaData(texto) {
        if(/^\d{4}-\d{2}-\d{2}/.test(texto)){
            return new Date(texto.split("-"));
        } else {
            throw new Error ('Deve estar no formado AAAA-MM-DD');
        }
    }
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}
