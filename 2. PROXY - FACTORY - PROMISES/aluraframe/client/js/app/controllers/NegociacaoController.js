class NegociacaoController {
    
    constructor(){
        
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        let self = this;
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            
            get(target, prop, receiver) {
                
                if(['exclui', 'adiciona'].includes(prop) && typeof(target[prop]) == 'function') {
                    
                    return function() {

                        Reflect.apply(target[prop],target,arguments);
                        self._negociacoesView.update(self._listaNegociacoes);
                        self._mensagemView.update(self._mensagem);
                    }
                }

                else {
                    return target[prop];
                }
            }
        });

        this._negociacoesView = new NegociacoesView($('#negociacoes'));

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        
        self._negociacoesView.update(self._listaNegociacoes);
        self._mensagemView.update(self._mensagem);
    }

    adiciona(event){
        
        event.preventDefault();

        this._mensagem.texto = 'Nova negociação cadastrada com sucesso!';
        this._criarNegociacao();
        this._limparFormulario();
    }

    exclui() {

        this._mensagem.texto = 'Negociações excluídas com sucesso!';
        this._listaNegociacoes.exclui();
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