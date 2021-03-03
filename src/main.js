//variaveis globais do programa 
        let cidades;
        let numeroCidades;
        let comando = window.prompt("Digite o numero 1 para especificar o numero de cidades e registrar as distâncias:\n Digite 4 para sair: ");

while(comando != 4){
   
              if(comando == 1){
                        //declaro a variavel que armazena o numero de cidades que o usuário vai definir 
                        numeroCidades = window.prompt("Digite o numero de cidades?"); // perguntando ao usuário o numero de cidades?
                        while(numeroCidades > 5 && numeroCidades < 0){ // enquanto o numero de cidades não for igual a 5 eu repito a operação
                          numeroCidades = window.prompt("Digite o numero de cidades?");
                        }
                        //como são 5 cidades é uma matriz 5x5 = 25 espaços na memória
                         cidades = [], contador = 0;
                        while(contador < numeroCidades){
                          cidades[contador] = [];
                          contador++;
                        }
                        console.table(cidades);

                        for(let i = 0; i < cidades.length; i++){
                          for(let j = 0; j < cidades.length; j++){
                            if(cidades[i][j] != null){
                              continue; // verifica se já foi atribuido valor a variavel
                            }
                            cidades[i][j] = window.prompt("Qual a kilometragem dessa cidade [" + i + "]" + "[" + j + "]");
                            cidades[j][i] = cidades[i][j]; // garante que a distancia de a - b seja igual a b - a
                          }
                        }
                        console.table(cidades);
              }

              //depois de preencher os dados na matriz ele pede novamente 
              comando = window.prompt("Digite o numero 2 para printar a matriz cidades:\n Digite a opção 3 para definir uma rota e descobrir a distância:\nDigite 4 para sair: ");
              
              if(comando == 2){
                  
                  //mostrando a matriz em forma de tabela na tela
                  let valoresMatriz = " ";
                  for(let i = 0; i < cidades.length; i++){
                    for(let j = 0; j < cidades.length; j++){
                      valoresMatriz += cidades[i][j] + " "; 
                    }
                    valoresMatriz += "\n";
                  }
                  alert("Conteudo da matriz:\n" + valoresMatriz);
              }

              if(comando == 3){

                let somaRotas = 0;
                let rotas = [];
                let contador = 0, numeroRotas = window.prompt("Digite o numero de rotas que você deseja?");

                while(contador < numeroRotas){
                 rotas[contador] = window.prompt("Digite a letra da cidade que você deseja?");
                 contador++; 
                }
                contador = 0;
                ProximaPosicao = 0 
                while(contador < numeroRotas){
                  if((rotas[contador] == "A" || rotas[contador] == "a") && (rotas[ProximaPosicao + 1] == "B" || rotas[ProximaPosicao + 1] == "b") ){
                    if(cidades[0][1] == 0){
                      alert("Rota inválida!");
                      break;
                    }
                  somaRotas += cidades[0][1];
                  console.log(cidades[0][1]);
                 } else if((rotas[contador] == "B" || rotas[contador] == "b") && (rotas[ProximaPosicao + 1] == "C" || rotas[ProximaPosicao + 1] == "c")){
                 
                  if(cidades[1][2] == 0){
                      alert("Rota inválida!");
                      break;
                    }
                  somaRotas += parseInt(cidades[1][2]);
                 } else if((rotas[contador] == "C" || rotas[contador] == "c") && (rotas[ProximaPosicao + 1] == "D" || rotas[ProximaPosicao + 1] == "d")){
                  
                  if(cidades[2][3] == 0){
                      alert("Rota inválida!");
                      break;
                    }
                  somaRotas += parseInt(cidades[2][3]);
                 } else if((rotas[contador] == "D" || rotas[contador] == "d") && (rotas[ProximaPosicao + 1] == "E" || rotas[ProximaPosicao + 1] == "e")){
                  
                  if(cidades[3][4] == 0){
                      alert("Rota inválida!");
                      break;
                    }
                  somaRotas += parseInt(cidades[3][4]);
                 }
                 ProximaPosicao++;
                 contador++; 
                }
                alert("A distância das cidades foi de: " + somaRotas);
              }

              //ultimo prompt do programa 
              comando = window.prompt("Digite 4 para sair:");

              if(comando == 4){
                alert("Você selecionou a opção para sair do programa!");
                break;
              }
 }