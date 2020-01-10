class NegociacaoService {

    constructor() {

        this._http = new HttpService();
    }
    
    importaNegociacoesSemana() {

        return this._http.get('http://localhost:3000/negociacoes/semana')
                        .then(negociacoes => {

                            return negociacoes.map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
                        })
                        .catch(erro => {
                                console.log(erro);
                                throw new Error('Erro ao buscar as negociações da semana!');
                        });
    }

    importaNegociacoesSemanaPassada() {
       
        return this._http.get('http://localhost:3000/negociacoes/anterior')
                        .then(negociacoes => {
                              
                            return negociacoes.map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
                        })
                        .catch(erro => {       
                            console.log(erro);
                            throw new Error('Erro ao buscar as negociações da semana passada!');
                        });
    }

    importaNegociacoesSemanaRetrasada() {
       
        return this._http.get('http://localhost:3000/negociacoes/retrasada')
                        .then(negociacoes => {
                                            
                            return negociacoes.map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
                        })
                        .catch(erro => {                     
                            console.log(erro);
                            throw new Error('Erro ao buscar as negociações da semana retrasada!');
                        });
    }

    importaNegociacoes() {

        return Promise.all(
                [this.importaNegociacoesSemana(),
                this.importaNegociacoesSemanaPassada(),
                this.importaNegociacoesSemanaRetrasada()]
            ).then((listaNegociacoes) => {

                let negociacoes = listaNegociacoes.reduce((negociacoes, negociacao) => negociacoes.concat(negociacao), []);
                return negociacoes;
            })
            .catch(erro => { throw erro; });
    }
}