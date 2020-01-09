class NegociacaoController {
    
    constructor(){
        
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind( new ListaNegociacoes()
                                          ,new NegociacoesView($('#negociacoes'))
                                          ,'exclui', 'adiciona');

        
        this._mensagem = new Bind( new Mensagem()
                                  ,new MensagemView($('#mensagemView'))
                                  ,'texto');
    }

    adiciona(event){
        
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criarNegociacao());
        this._limparFormulario();
        this._mensagem.texto = 'Nova negociação cadastrada com sucesso!';
    }

    exclui() {

        this._listaNegociacoes.exclui();
        this._mensagem.texto = 'Negociações excluídas com sucesso!';
    }

    importaNegociacoes() {
        
        let negociacaoService = new NegociacaoService();

        negociacaoService.importaNegociacoes((erro,dados) => {
            
            if(erro) {
                this._mensagem.texto = erro;
                return;
            }
            else {
                dados.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = "Negociações importadas com sucesso!";
            }

        });
    }

    _limparFormulario() {
        
        this._inputData.value = '';
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    _criarNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}