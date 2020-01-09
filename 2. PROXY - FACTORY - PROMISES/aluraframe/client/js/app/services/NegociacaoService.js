class NegociacaoService {
    
     importaNegociacoes(clb) {
       
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/negociacoes/semana');

        xhr.onreadystatechange = () => {
            
            /*  readyState = 
                    0: requisição ainda não iniciada
                    1: conexão com o servidor estabelecida
                    2: requisição recebida
                    3: processando requisição
                    4: requisição está concluída e a resposta está pronta */

            if(xhr.readyState == 4) {
                
                if(xhr.status == 200) {

                    let dados = JSON.parse(xhr.responseText)
                                    .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor));
                    clb(null, dados);
                }
                else {
                    
                    console.log(xhr.responseText);
                    clb('Erro na requisição!')
                }
            }
        }

        xhr.send();
    }
}