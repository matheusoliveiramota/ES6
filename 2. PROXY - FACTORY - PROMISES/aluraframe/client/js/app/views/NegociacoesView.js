class NegociacoesView extends View{
    
    template(model) {
        return `<table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th onclick="negociacaoController.ordena('data')">DATA</th>
                            <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                            <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                            <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        ${model.negociacoes.map(item =>
                            `<tr>
                                    <td>${DateHelper.dataParaTexto(item.data)}</td>
                                    <td>${item.quantidade}</td>
                                    <td>${item.valor}</td>
                                    <td>${item.volume}</td>
                            </tr>`  
                            ).join('')
                        }
                    </tbody>
                    <tfoot>
                        <tr>    
                            <td colspan="3"></td>
                            <td>${model.volumeTotal}</td>
                        </tr>
                    </tfoot>
            </table>`;
    }
}