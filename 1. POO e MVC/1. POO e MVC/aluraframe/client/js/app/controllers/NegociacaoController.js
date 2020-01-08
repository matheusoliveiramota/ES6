class NegociacaoController {
    
    constructor(){
        
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoes'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        
        event.preventDefault();
        this._criarNegociacao();
        this._limparFormulario();

        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem.texto = 'Nova negociação cadastrada com sucesso!';
        this._mensagemView.update(this._mensagem);
    }

    _limparFormulario() {
        
        this._inputData.value = '';
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    _criarNegociacao() {
        
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        this._listaNegociacoes.adiciona(negociacao);
    }
}