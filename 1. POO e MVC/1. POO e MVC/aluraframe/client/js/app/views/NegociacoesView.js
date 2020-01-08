class NegociacoesView extends View{
    
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody id="negociacoes">
                </tbody>
                    ${
                        model.negociacoes.map(item =>
                          `<tr>
                                <td>${DateHelper.dataParaTexto(item.data)}</td>
                                <td>${item.quantidade}</td>
                                <td>${item.valor}</td>
                                <td>${item.volume}</td>
                           </tr>
                          `  
                        )
                    }
                <tfoot>
                    <tr>    
                        <td colspan="3"></td>
                        <td>${model.negociacoes.reduce((total,item) => total + item.volume, 0)}</td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}