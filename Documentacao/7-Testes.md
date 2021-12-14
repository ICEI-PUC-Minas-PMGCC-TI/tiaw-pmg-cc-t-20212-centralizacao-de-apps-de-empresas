# Avaliação da Aplicação

<span style="color:red">Pré-requisitos: <a href="6-Implementação.md"> Projeto da Solução</a></span>



## Avaliação Heurística – Checklist 

|ID|Característica|Sim      Não      N/A|Comentários |
|--|--------------|---------------------|------------|
||1 - Visibilidade do status do sistema ||
|1.1|As telas do sistema iniciam com um título que descreve seu conteúdo?|X         O         O |
|1.2|O ícone selecionado é destacado dos demais não selecionados? |O         X         O |
|1.3|Há feedback visual do menu ou escolhas selecionadas?|O         X         O |
|1.4|O sistema provê visibilidade do estado atual e alternativas para ação?|O         O          X|
||2 - Correspondência entre sistema e mundo real ||
|2.1|Os ícones e ilustrações são concretos e familiares? |X         O         O |
|2.2|As cores, quando utilizadas, correspondem aos códigos de cores comuns? |O         O         X |
|2.3|A linguagem utilizada evita jargões técnicos? |X         O         O |
|2.4|Os números são devidamente separados nos milhares e nos decimais? |X         O         O |
||3 - Controle do usuário e liberdade ||
|3.1|Se o sistema utiliza janelas que se sobrepõem, ele permite a organização e a troca simples? |O         O         X |
|3.2|Quando o usuário conclui uma tarefa, o sistema aguarda uma ação antes de processar? |X         O         O |
|3.3|O usuário é solicitado a confirmar tarefas que possuem consequências drásticas? |O         O         X |
|3.4|Existe uma funcionalidade para desfazer ações realizadas pelo usuário? |O         X         O |
|3.5|O usuário pode editar, copiar e colar durante a entrada de dados? |X         O         O |
|3.6|O usuário pode se mover entre campos e janelas livremente? |X         O         O |
|3.7|O usuário pode configurar o sistema, a sessão, a tela conforme sua preferência? |O         X         O |
||4 - Consistência e padrões  ||
|4.1|O sistema evita uso constante de letras maiúsculas?  |X         O         O |
|4.2|Os números são justificados à direita e alinhados quanto aos decimais?  |O         O         X |
|4.3|Os ícones e ilustrações são rotulados?  |X O O |
|4.4|As instruções aparecem de forma consistente sempre no mesmo local?  |X O O|
|4.5|Os objetos do sistema são nomeados de maneira consistente em todo o sistema?  |X O O |
|4.6|Os campos obrigatórios e opcionais são corretamente sinalizados?  |O O X |
||5 - Prevenção de erros   ||
|5.1| As opções de menu são lógicas, distintas e mutuamente exclusivas?  |X O O |
|5.2| Se o sistema exibe múltiplas janelas, a navegação entre as janelas é simples e visível?  |O O X |
|5.3| O sistema alerta o usuário se ele está prestes a fazer erros críticos?  |O O X |
||6 - Reconhecimento ao invés de recordação   ||
|6.1| Há distinção clara quando é possível selecionar um item ou vários?  |X O O |
|6.2| Os rótulos de campos estão próximos dos campos e separados por pelo menos um espaço?  |X O O |
|6.3| São utilizadas bordas para identificar possíveis grupos de elementos?  |X O O |
|6.4| Existem opções default para o que o usuário precisa selecionar?  |X O O |
|6.5| Há alguma diferença visível para identificar a janela ativa?  |O X O |
||7 - Flexibilidade e eficiência de uso   ||
|7.1| Existem atalhos para as funções disponíveis no sistema?  |X O O |
|7.2| O usuário pode realizar a tarefa de maneiras mais simplificadas?  |X O O |
|7.3| O sistema permite integração com outras fontes das informações tratadas?  |O O X |
||8 - Estética e design minimalista   ||
|8.1| Apenas a informação necessária para ação está visível na tela?  |X O O |
|8.2| Os ícones e ilustrações estão distintos do seu fundo?  |X O O |
|8.3| Os agrupamentos são separados por espaços em branco?  |X O O |
|8.4| Os rótulos e menus são breves, familiares e descritivos das opções que representam?  |X O O |
||9 - Ajudar os usuários a reconhecer, diagnosticar se recuperar de erros.   ||
|9.1| É utilizado um sinal sonoro para alertar de erros?  |O X O |
|9.2| Os questionamentos são breves e sem ambiguidade?  |X O O |
|9.3| Se um erro é detectado, o usuário tem visibilidade sobre qual o local gerador do erro?  |O X O |
|9.4| As mensagens de erro identificam a severidade e a causa do erro?  |X O O |
|9.5| As mensagens de erro sugerem uma ação para correção?  |X O O |
||10 - Ajuda e documentação   ||
|10.1|As instruções online estão visualmente distintas?   |O X O |
|10.2|Existe ajuda online sensível ao contexto?   |O O X |
|10.3|É simples o acesso a ajuda do sistema e o retorno ao sistema?   |O O X |


## Plano de Testes
 

|Caso de Teste|CT-01 - Visualizar notícias principais|
|-------------|--------------------------------------|
|Requisitos Associados|RF-01 - O site deve apresentar na página principal notícias dinâmicas obtidas por meio de canais de notícias da Internet (API)
RF-02 - O site deve apresentar, para cada notícia, uma imagem correspondente ao assunto apresentado (thumbnail)|
|Objetivo do Teste|Verificar se a carga de notícias está acontecendo corretamente
|Passos1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Verificar o processo de carga 
|Critérios de Êxito|Deve haver uma requisição AJAX no painel NETWORK das ferramentas do Desenvolvedor (recurso do Navegador).
As notícias devem ser exibidas corretamente no site, sendo necessárias pelo menos 3 notícias sendo apresentadas
As notícias devem trazer imagens visíveis associadas ao assunto da notícia|



> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Avaliação

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.
