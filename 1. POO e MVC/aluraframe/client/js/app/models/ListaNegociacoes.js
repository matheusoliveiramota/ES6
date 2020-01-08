class ListaNegociacoes {

    constructor(armadilha) {
        
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        this._armadilha(this); // Executar instruções de update das Views
    }

    exclui() {

        this._negociacoes = [];
        this._armadilha(this); // Executar instruções de update das Views
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}