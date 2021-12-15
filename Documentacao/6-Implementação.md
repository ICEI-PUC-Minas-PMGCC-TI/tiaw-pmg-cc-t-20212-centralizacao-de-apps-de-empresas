# Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="4-Gestão-Configuração.md"> Ambiente e Ferramentas de Trabalho</a></span>

## Tecnologias Utilizadas

Em nosso projeto, utilizamos as linguagens HTML, CSS e JavaScript. Utilizamos também o LocalStorage para armazenar os dados de mercados, produtos e usuários, e o SessionStorage, para se ter conhecimento da pessoa logada.


## Arquitetura da solução

![image](https://user-images.githubusercontent.com/90793478/146096034-21996b40-a33f-400c-9b9e-7b4c89411a8e.png)
<br>
Na página de login é onde há a consulta ao item de usuários do LocalStorage, para garantir que para que o usuário possa acessar o conteúdo do site, ele tenha uma conta.

<br><br>
![image](https://user-images.githubusercontent.com/90793478/146097265-6e872ccf-210d-421c-9edd-2dc3b4ed059a.png)
![image](https://user-images.githubusercontent.com/90793478/146098243-beb340c2-6f0c-4d73-bcbe-f0d2c7a91afc.png)
<br>
O item de mercados do LocalStorage é acessado e são mostrados os mercados cadastrados na página inicial. Na página de cadastro de mescador, a lista de mercados do mesmo item é atualizada ao se cadastrar um novo mercado.
<br><br>

![image](https://user-images.githubusercontent.com/90793478/146097601-70aeac4b-f46f-4bf9-a260-2c0e50f20caf.png)
![image](https://user-images.githubusercontent.com/90793478/146097700-1f5258b5-24cf-49c2-ac52-9663674f7d6c.png)
O item de produtos do LocalStorage é acessado e são mostrados os produtos cadastrados na página de pesquisa. Na página de cadastro de produtos, a lista de produtos do mesmo item é atualizada ao se cadastrar ou editar um produto.
<br><br>
![image](https://user-images.githubusercontent.com/90793478/146098371-4ecf7404-ebe4-440e-8a3a-1b36a31dd393.png)
![image](https://user-images.githubusercontent.com/90793478/146098403-480b2bf7-669a-493c-aeb9-10f0815944e6.png)
O item de usuários do LocalStorage é acessado e são mostrados os usuários cadastrados na página de usuários. Na página de cadastro de administradores, a lista de usuários do mesmo item é atualizada ao se cadastrar um novo administrador.


## Funcionalidades do software

Funcionalidade: login
Alunos responsável: Mário <br>
Link do código: https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20212-centralizacao-de-apps-de-empresas/blob/master/Codigo/login.html <br>
A tela de login do software permite ao usuário criar uma conta, ou acessar o conteúdo do site por uma já existente.

![image](https://user-images.githubusercontent.com/90793478/146106433-b3b7aba2-15e8-4b2a-b5d3-6d76c4c34d2d.png)

Artefatos da funcionalidade
- login.html
- app.js
- style.css

<hr>
Funcionalidade: Pesquisa de mercados
Alunos responsável: Hudsson <br>
Link do código: https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20212-centralizacao-de-apps-de-empresas/blob/master/Codigo/index.html <br>
A tela inicial do software permite ao usuário visualizar todos os mercados cadastrados, filtrá-los por nome ou endereço (estado, cidade ou bairro), e ainda acessar a página específica de cada mercado apenas clicando em seu nome ou foto.

![image](https://user-images.githubusercontent.com/90793478/146108052-ceba9bdd-b0ef-4df8-a80e-edc1636adb05.png)

Artefatos da funcionalidade
- index.html
- app.js
- style.css

<hr>

Funcionalidade: Pesquisa de produtos
Alunos responsável: Hudsson <br>
Link do código: https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20212-centralizacao-de-apps-de-empresas/blob/master/Codigo/pesquisa.html <br>
A tela de pesquisa de produtos permite o usuário filtrar os produtos por nome, categoria, marca, mercado e bairro do mercado. Sua função é trazer as informações sobre o produto de modo prático e objetivo.

![image](https://user-images.githubusercontent.com/90793478/146108007-05dbc0fc-d1d4-4f9e-89e5-009a9fd5edcf.png)

Artefatos da funcionalidade
- pesquisa.html
- app.js
- style.css
<hr>

Funcionalidade: Cadastro de produtos
Alunos responsável: Hudsson <br>
Link do código: https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20212-centralizacao-de-apps-de-empresas/blob/master/Codigo/cadastroProdutos.html <br>
A tela de cadastro de produtos do software permite ao administrador cadastrar novos produtos.

![image](https://user-images.githubusercontent.com/90793478/146108241-eb8f1349-1def-4f9b-90c8-8e738c571013.png)

Artefatos da funcionalidade
- cadastroProdutos.html
- app.js
- style.css

<hr>

Funcionalidade: Edição de produtos
Alunos responsável: Hudsson <br>
Link do código: https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20212-centralizacao-de-apps-de-empresas/blob/master/Codigo/editar.html <br>
A tela de edição de produtos do software permite ao administrador editar dados de um produto já cadastrado.

![image](https://user-images.githubusercontent.com/90793478/146108789-2fbeab64-cb48-4429-9133-daeb0c7bedf0.png)

Artefatos da funcionalidade
- editar.html
- app.js
- style.css

<hr>

Funcionalidade: Cadastro de mercados
Alunos responsável: Pedro <br>
Link do código: https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20212-centralizacao-de-apps-de-empresas/blob/master/Codigo/cadastroMercados.html <br>
A tela de cadastro de mercados do software permite ao administrador cadastrar novos mercados.

![image](https://user-images.githubusercontent.com/90793478/146108830-89178b90-51b2-44c0-bec1-d1aa7a291a93.png)

Artefatos da funcionalidade
- cadastroMercados.html
- app.js
- style.css

<hr>

Funcionalidade: Visualização de usuários
Alunos responsável: Mário <br>
Link do código: https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20212-centralizacao-de-apps-de-empresas/blob/master/Codigo/usuarios.html <br>
A tela de usuarios do software permite ao administrador saber quem são as pessoas cadastradas no site.

![image](https://user-images.githubusercontent.com/90793478/146109262-347825c8-d2c0-435a-911b-ee5121f37f24.png)

Artefatos da funcionalidade
- usuarios.html
- app.js
- style.css

<hr>

Funcionalidade: Cadastro de administradores
Alunos responsável: Hudsson <br>
Link do código: https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-t-20212-centralizacao-de-apps-de-empresas/blob/master/Codigo/cadastroAdm.html <br>
A tela de cadastro de administradores do software permite ao administrador cadastrar novos administradores.

![image](https://user-images.githubusercontent.com/90793478/146109404-05268ce6-a2ed-4838-a87e-ef78bb743990.png)

Artefatos da funcionalidade
- cadastroAdm.html
- app.js
- style.css
