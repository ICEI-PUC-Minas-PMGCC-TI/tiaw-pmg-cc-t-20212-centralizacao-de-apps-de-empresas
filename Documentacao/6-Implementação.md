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


