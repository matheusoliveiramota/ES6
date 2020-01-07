class DateHelper{
    
    constructor() {
        throw new Error('Você não pode criar uma instância dessa classe');
    }

    static textoParaData(texto) {
        return new Date(texto.split('-'));
    }

    static dataParaTexto(data) {
        return `${data.getDate().toString().padStart(2,'0')}/${(data.getMonth() + 1).toString().padStart(2,'0')}/${data.getFullYear()}`;
    }
}