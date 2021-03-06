class ListaNegociacoes {

    constructor() {
        
        this._negociacoes = []
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    exclui() {
        
        this._negociacoes = []
    }

    get volumeTotal() {

        return this._negociacoes.reduce((total,negociacao) => total += negociacao.volume,0)
    }

    ordena(regra) {

        this._negociacoes.sort(regra);
    }

    inverteOrdem() {
        
        this._negociacoes.reverse();
    }
}