// ------------------- PRODUTOS -------------------------

function leProdutos () {
    let strDados = localStorage.getItem('db_Prod');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else 
    {
        objDados = { produtos: 
            [ 
                {Produto: "Maçã fuji", Mercado: 1,Categoria: "Frutas", Preco:8.99, Estoque:150, Marca:"-", Unidade:"1Kg", Imagem:"https://picsum.photos/100?random=1"}, 
                {Produto: "Detergente", Mercado: 2, Categoria: "Limpeza", Preco:5.99, Estoque:50, Marca:"Veja", Unidade:"500mL", Imagem:"https://picsum.photos/100?random=1"}, 
                {Produto: "Biscoito recheado", Mercado: 3, Categoria: "Biscoitos", Preco:3.99, Estoque:30, Marca:"Traquinas", Unidade:"50Kg", Imagem:"https://picsum.photos/100?random=1"},
                {Produto: "Coxa de frango", Mercado: 1, Categoria: "Carnes", Preco:14.99, Estoque:50, Marca:"Friboi", Unidade:"500g", Imagem:"https://picsum.photos/100?random=1"}, 
                {Produto: "Nescau", Mercado: 2, Categoria: "Café da manhã", Preco:7.99, Estoque:50, Marca:"Nescau", Unidade:"500mL", Imagem:"https://picsum.photos/100?random=1"}, 
                {Produto: "Arroz", Mercado: 3, Categoria: "Comida", Preco:10.99, Estoque:50, Marca:"Arrois", Unidade:"500mL", Imagem:"https://picsum.photos/100?random=1"}, 
                {Produto: "Feijão", Mercado: 1, Categoria: "Comida", Preco:6.50, Estoque:50, Marca:"Feijões", Unidade:"500g", Imagem:"https://picsum.photos/100?random=1"}, 
                {Produto: "Melancia", Mercado: 2, Categoria: "Frutas", Preco:11.99, Estoque:50, Marca:"-", Unidade:"kg", Imagem:"https://picsum.photos/100?random=1"}, 
                {Produto: "Refrigerante", Mercado: 3, Categoria: "Bebidas", Preco:8.50, Estoque:50, Marca:"Coca-Cola", Unidade:"500mL", Imagem:"https://picsum.photos/100?random=1"}, 
                {Produto: "Café", Mercado: 1, Categoria: "Café da manhã", Preco:8.90, Estoque:50, Marca:"Três corações", Unidade:"500g", Imagem:"https://picsum.photos/100?random=10"}            
            ]
        }
    }

    salvaProdutos(objDados);

    return objDados;
}

function salvaProdutos (dados) {
    localStorage.setItem ('db_Prod', JSON.stringify (dados));
}

function incluirProduto (){
    // Ler os dados do localStorage
    let objDados = leProdutos();

    let mercado = document.getElementById('seletorMercado').value;
    // Incluir um novo contato
    let strProduto = document.getElementById ('campoProduto').value;
    let strCategoria = document.getElementById ('campoCategoria').value;
    let strPreco = document.getElementById ('campoPreco').value;
    let strEstoque = document.getElementById ('campoEstoque').value;
    let strMarca = document.getElementById ('campoMarca').value;
    let strUnidade = document.getElementById ('campoUnidade').value;
    let strImagem = document.getElementById ('campoImagem').files[0];
    if(strImagem==undefined)
    {alert("Logo não selecionada");}
    else
    {
        let fr = new FileReader ();
        fr.readAsDataURL (strImagem); 

        fr.onloadend = function () {
            let img = fr.result;
            let novoProduto = {
                Produto: strProduto,
                Mercado: mercado,
                Categoria: strCategoria,
                Preco: strPreco,
                Imagem: img,
                Unidade: strUnidade,
                Estoque: strEstoque,
                Marca: strMarca
            };
            if ( mercado!='')
            {
                if(strPreco!='' && strProduto!='' && strCategoria!='' && strEstoque!='' && strMarca!='' && strUnidade!='')
                {
                    objDados.produtos.push (novoProduto);
                }
                else
                {
                    alert("Algum campo não foi preenchido");
                }
            }
            else
            {
                alert("Mercado não selecionado");
            }
        
            // Salvar os dados no localStorage novamente
            salvaProdutos (objDados);
        
            // Atualiza os dados da tela
            imprimeProdutosTabela ();            
        }
    }
}

function imprimeProdutosTabela () {
    let tela = document.getElementById('tela');
    let objMercados = leMercados();
    let mercado = document.getElementById('seletorMercado').value;
    let strHtml = `<table border="2" id="tabela"> 
    <tr>
        <td>#</td>
        <td>Produto</td>
        <td>Mercado</td>
        <td>Categoria</td>
        <td>Preço</td>
        <td>Marca</td>
        <td>Unidade</td>
        <td>Estoque</td>
        <td>Imagem</td>
    </tr>
    `;
    let objDados = leProdutos ();
    let contador = 1;
    if (mercado!='')
    {
        for (i=0; i< objDados.produtos.length; i++) {
            if(objDados.produtos[i].Mercado==mercado)
            {
                for (j=0; j<objMercados.mercados.length; j++)
                {
                    if(objMercados.mercados[j].id==objDados.produtos[i].Mercado)
                    {
                        strHtml += `<tr><td>${contador}</td><td>${objDados.produtos[i].Produto}</td><td>${objMercados.mercados[j].Mercado}</td>
                                    <td>${objDados.produtos[i].Categoria}</td><td>${objDados.produtos[i].Preco}</td>
                                    <td>${objDados.produtos[i].Marca}</td><td>${objDados.produtos[i].Unidade}</td>
                                    <td>${objDados.produtos[i].Estoque}</td><td><img src="${objDados.produtos[i].Imagem}" alt="${objDados.produtos[i].Produto}"></img></td></tr>`
                        contador++;
                    }
                }
            }
        }
    }
    else {        
        for (i=0; i< objDados.produtos.length; i++) {
            for (j=0; j<objMercados.mercados.length; j++)
            {
                if(objMercados.mercados[j].id==objDados.produtos[i].Mercado)
                {
                    strHtml += `<tr><td>${contador}</td><td>${objDados.produtos[i].Produto}</td><td>${objMercados.mercados[j].Mercado}</td>
                                <td>${objDados.produtos[i].Categoria}</td><td>${objDados.produtos[i].Preco}</td>
                                <td>${objDados.produtos[i].Marca}</td><td>${objDados.produtos[i].Unidade}</td>
                                <td>${objDados.produtos[i].Estoque}</td><td><img src="${objDados.produtos[i].Imagem}" alt="${objDados.produtos[i].Produto}"></img></td></tr>`
                    contador++;
                }
            }
        }
    }

    strHtml += `</table>`;
    tela.innerHTML = strHtml;
    // salvaDados(objDados);
}

function imprimeProdutosEditar () {
    let tela = document.getElementById('tela');
    let telaFormulario = document.getElementById('formContatos');
    let objMercados = leMercados();
    let mercado = document.getElementById('seletorMercado').value;
    let botaoVoltar = document.getElementById('botaoVoltar');
    telaFormulario.innerHTML = '';
    botaoVoltar.innerHTML = '';
    let strHtml = `<table border="2" id="tabela"> 
    <tr>
        <td>#</td>
        <td>Produto</td>
        <td>Mercado</td>
        <td>Categoria</td>
        <td>Preço</td>
        <td>Marca</td>
        <td>Unidade</td>
        <td>Estoque</td>
        <td>Imagem</td>
    </tr>
    `;
    let objDados = leProdutos ();
    let contador = 1;

    if (mercado!='')
    {
        for (i=0; i< objDados.produtos.length; i++) {
            if(objDados.produtos[i].Mercado==mercado)
            {
                for (j=0; j<objMercados.mercados.length; j++)
                {
                    if(objMercados.mercados[j].id==objDados.produtos[i].Mercado)
                    {
                        strHtml += `<tr><td>${contador}</td><td>${objDados.produtos[i].Produto}</td><td>${objMercados.mercados[j].Mercado}</td>
                                    <td>${objDados.produtos[i].Categoria}</td><td>${objDados.produtos[i].Preco}</td>
                                    <td>${objDados.produtos[i].Marca}</td><td>${objDados.produtos[i].Unidade}</td>
                                    <td>${objDados.produtos[i].Estoque}</td><td><img src="${objDados.produtos[i].Imagem}" alt="${objDados.produtos[i].Produto}"></img></td><td><button onClick="editarProdutos(${i})"><a href="editar.html#TituloTeste">Editar</a></button></td></tr>`
                        contador++;
                    }
                }
            }
        }
    }
    else {        
        for (i=0; i< objDados.produtos.length; i++) {
            for (j=0; j<objMercados.mercados.length; j++)
            {
                if(objMercados.mercados[j].id==objDados.produtos[i].Mercado)
                {
                    strHtml += `<tr><td>${contador}</td><td>${objDados.produtos[i].Produto}</td><td>${objMercados.mercados[j].Mercado}</td>
                                <td>${objDados.produtos[i].Categoria}</td><td>${objDados.produtos[i].Preco}</td>
                                <td>${objDados.produtos[i].Marca}</td><td>${objDados.produtos[i].Unidade}</td>
                                <td>${objDados.produtos[i].Estoque}</td><td><img src="${objDados.produtos[i].Imagem}" alt="${objDados.produtos[i].Produto}"></img></td><td><button onClick="editarProdutos(${i})"><a href="editar.html#TituloTeste">Editar</a></button></td></tr>`
                    contador++;
                }
            }
        }
    }

    strHtml += `</table>
    <button><a href="cadastroProdutos.html">Voltar</a></button>`;
    tela.innerHTML = strHtml;
    // salvaDados(objDados);
}

function editarProdutos (numero) 
{

    let tela = document.getElementById('tela');
    let botao = document.getElementById('botaoCarregar');
    botao.innerHTML = '';
    let botaoVoltar = document.getElementById('botaoVoltar');
    tela.innerHTML = '';
    botaoVoltar.innerHTML = '';

    let objDados = leProdutos();

    let telaFormulario = document.getElementById('formContatos');
    
    let strForm = `<p>Produto: <br><input value="${objDados.produtos[numero].Produto}" type="text" id="campoProduto"></p>
    <p>Categoria: <br><input value="${objDados.produtos[numero].Categoria}" type="text" id="campoCategoria"></p>
    <p>Preço: <br><input value="${objDados.produtos[numero].Preco}" type="number" id="campoPreco"></p>
    <p>Marca: <br><input value="${objDados.produtos[numero].Marca}" type="text" id="campoMarca"></p>
    <p>Unidade: <br><input value="${objDados.produtos[numero].Unidade}" type="text" id="campoUnidade"></p>
    <p>Estoque: <br><input value="${objDados.produtos[numero].Estoque}" type="number" id="campoEstoque"></p>
    <p><button onClick="salvarProdutoEditado(${numero})">Salvar</button>
    <p>`;

    telaFormulario.innerHTML = '';
    telaFormulario.innerHTML = strForm;
    botaoVoltar.innerHTML = '<button onClick="imprimeProdutosEditar()">Cancelar</button>';
}

function salvarProdutoEditado (numero)
{

    let objDados = leProdutos();
    let merc = objDados.produtos[numero].Mercado;
    let strProduto = document.getElementById ('campoProduto').value;
    let strCategoria = document.getElementById ('campoCategoria').value;
    let strPreco = document.getElementById ('campoPreco').value;
    let strEstoque = document.getElementById ('campoEstoque').value;
    let strMarca = document.getElementById ('campoMarca').value;
    let strUnidade = document.getElementById ('campoUnidade').value;
    
    if (strProduto!='' && strCategoria!='' && strPreco!='' && strEstoque!='' && strMarca!='' && strUnidade!='' && strImagem!='')
    {
        objDados.produtos[numero] = {
            Produto: strProduto,
            Mercado: merc,
            Categoria: strCategoria,
            Preco: strPreco,
            Imagem: objDados.produtos[numero].Imagem,
            Unidade: strUnidade,
            Estoque: strEstoque,
            Marca: strMarca
        }
        salvaProdutos(objDados);
    
        imprimeProdutosEditar();
        let botao = document.getElementById('botaoCarregar');
        botao.innerHTML = `<button onclick="imprimeProdutosEditar()" id="btnCarregaDados">Carrega Dados</button>`
    }
    else
    {
        alert("Algum campo não foi preenchido");
    }

}

// ------------------- MERCADOS -------------------------

function leMercados() {
    let strDados = localStorage.getItem('db_Mercados');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            mercados:
                [
                    { Mercado: "Super Nosso", id: 1, Estado:"MG", Cidade:"Belo Horizonte", Bairro: "Jardim Atlântico", RuaNumero:"Av. Portugal, 2481", Telefone: "(31) 3359-3249", Logo: "https://picsum.photos/100?random=1"},
                    { Mercado: "Supermercados BH", id: 2, Estado:"MG", Cidade:"Belo Horizonte", Bairro: "Jardim Atlântico", RuaNumero:"Av. Portugal, 3253", Telefone: "(31) 3497-2169", Logo: "https://picsum.photos/100?random=1"},
                    { Mercado: "Verdemar", id: 3, Estado:"MG", Cidade:"Belo Horizonte", Bairro: "Jardim Atlântico", RuaNumero:"Av. Portugal, 2481", Telefone: "(31) 2391-0010", Logo: "https://picsum.photos/100?random=1"}
                ]
        }
    }

    salvaMercados(objDados);

    return objDados;
}

function salvaMercados(dados) {
    localStorage.setItem('db_Mercados', JSON.stringify(dados));
}


function mercadosIndex () {

    let objMercados = leMercados();
    let tela = document.getElementById('telaMercados');

    let mercadoPesquisado = stringPadrao(document.getElementById('pesquisaMercado').value);
   
    let strHtml = `<div class="row">`;

    for (let i=0; i<objMercados.mercados.length; i++)
    {
        const merc = objMercados.mercados[i];

        if (stringPadrao(merc.Mercado).indexOf(mercadoPesquisado)>=0  || mercadoPesquisado=='' || 
            stringPadrao(merc.Bairro).indexOf(mercadoPesquisado)>=0 || stringPadrao(merc.RuaNumero).indexOf(mercadoPesquisado)>=0 ||
            stringPadrao(merc.Estado).indexOf(mercadoPesquisado)>=0 || stringPadrao(merc.Cidade).indexOf(mercadoPesquisado)>=0)
        {
            strHtml += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card text-center">
                <div class="card-header">
                    <h5 onclick="mercadoPesquisa(${merc.id})"><a href="#">${merc.Mercado}</a></h5>
                </div>
                <div class="float-center">
                    <a href="#"><img src="${merc.Logo}" onclick="mercadoPesquisa(${merc.id})" class="imagemCartao" width="100px" height="100px" alt="logo do ${merc.Mercado}"></img></a>
                </div>
                <div class="card-body">
                    <p class="card-title">${merc.Cidade} - ${merc.Estado}<br>${merc.Bairro}</p>
                    <h5 class="card-text"></h5>
                </div>
                <div class="card-footer text-muted">
                </div>
            </div>
        </div>`;

        }
    }
    strHtml += `</div>`;

    tela.innerHTML = strHtml;

}

function mercadoPesquisa (opcao) {
    sessionStorage.setItem ('mercadoClicadoIndex', JSON.stringify (opcao));
    window.location.href = 'pesquisa_2.html';
}

function mostrarSeletor () {
    let ObjMercado = leMercados();
    let tela = document.getElementById('DivSeletorMercado');

    let seletor =     `<span>          
                          <select class="form-select me-1" id="seletorMercado">
                          <option value="" selected>Todos os mercados</option>`

    for (i=0; i<ObjMercado.mercados.length; i++)
    {
        seletor += `<option value="${ObjMercado.mercados[i].id}">${ObjMercado.mercados[i].Mercado}</option>
                    `
    }

    seletor +=  `</select>
            </span>`

    tela.innerHTML = seletor;

}

function dadosMercado()
{
    let objetoM = leMercados();
    let tela = document.getElementById('dadosMercado');
    let merc = document.getElementById('seletorMercado').value;
    let img = '';
    let dados = `<p style="color:black!important; margin-left:15px;" class="text-left" >`;
    for (i=0; i<objetoM.mercados.length; i++)
    {
        if (merc == objetoM.mercados[i].id)
        {
            img = `<img src="${objetoM.mercados[i].Logo}" style="display:inline-block; float: left; margin-right:15px;">`;
            dados += `Cidade: ${objetoM.mercados[i].Cidade} - ${objetoM.mercados[i].Estado}<br>Bairro ${objetoM.mercados[i].Bairro}<br>Rua: ${objetoM.mercados[i].RuaNumero}<br>Telefone: ${objetoM.mercados[i].Telefone}</p>`;
        }
    }
    dados = img + dados;
    tela.innerHTML = dados;
}

function mostrarSeletorPesquisa () {
    let ObjMercado = leMercados();
    let tela = document.getElementById('DivSeletorMercado');

    let seletor =     `<span >          
                          <select class="form-select me-1" id="seletorMercado">
                          <option value="" selected>Todos os mercados</option>`

    for (i=0; i<ObjMercado.mercados.length; i++)
    {
        seletor += `<option value="${ObjMercado.mercados[i].id}">${ObjMercado.mercados[i].Mercado}</option>
                    `
    }

    seletor +=  `</select>
            </span><button onclick="filtraProdutos()"><span class="fa fa-search"></button>`

    tela.innerHTML = seletor;

}

function mostrarSeletorPesquisa_2 () {
    let opcao = sessionStorage.getItem ('mercadoClicadoIndex');
    let objetoM = leMercados();
    let tela = document.getElementById('DivSeletorMercado');

    let seletor =     `<span >          
                            <select class="form-select me-1" id="seletorMercado">
                            <option value="" >Todos os mercados</option>`

    for (i=0; i<objetoM.mercados.length; i++)
    {
        if(objetoM.mercados[i].id==opcao)
        {
            seletor += `<option value="${objetoM.mercados[i].id}" selected>${objetoM.mercados[i].Mercado}</option>
            `
        }
        else
        {
            seletor += `<option value="${objetoM.mercados[i].id}">${objetoM.mercados[i].Mercado}</option>
            `
        }
    }

    seletor +=  `</select>
            </span><button onclick="filtraProdutos()"><span class="fa fa-search"></button>`

    tela.innerHTML = seletor;    
}

function incluirMercado() {
    // Ler os dados do localStorage
    let objDados = leMercados();

    // Incluir um novo contato
    let strMercado = document.getElementById('campoMercado').value;
    let strid = objDados.mercados.length+1;
    let strEstado = document.getElementById('campoEstado').value;
    let strCidade = document.getElementById('campoCidade').value;
    let strBairro = document.getElementById('campoBairro').value;
    let strRuaNumero = document.getElementById('campoRuaNumero').value;
    let strTelefone = document.getElementById('campoTelefone').value;
    let strImagem = document.getElementById ('campoLogo').files[0];
    if(strImagem==undefined)
    {alert("Logo não selecionada");}
    else
    {
        let fr = new FileReader ();
        fr.readAsDataURL (strImagem); 
        fr.onloadend = function () {
            let img = fr.result;
            let novoMercado = {
                Mercado: strMercado,
                Logo: img,
                id: strid,
                Estado: strEstado,
                Cidade: strCidade,
                Bairro: strBairro,
                RuaNumero: strRuaNumero,
                Telefone: strTelefone,
            };
        
            if(img!='' && strMercado!='' && strEstado!='' && strCidade!='' && strBairro!='' && strRuaNumero!='' && strTelefone!='')
            {
                objDados.mercados.push(novoMercado);
        
                // Salvar os dados no localStorage novamente
                salvaMercados(objDados);
            
                // Atualiza os dados da tela
                imprimeMercadosTabela();
            }
            else
            {
                alert("Algum campo não foi preenchido");
            }
        }
    }
}

function imprimeMercadosTabela() {
    let tela = document.getElementById('telaMercados');
    let strHtml = `<table border="2" id="tabela"> 
    <tr>
        <td>Id</td>
        <td>Mercado</td>
        <td>Logo</td>
        <td>Cidade</td>
        <td>Endereço</td>
        <td>Telefone</td>
    </tr>
    `;
    let objDados = leMercados();

    for (i = 0; i < objDados.mercados.length; i++) {
        strHtml += `<tr><td>${objDados.mercados[i].id}</td><td>${objDados.mercados[i].Mercado}</td><td><img src="${objDados.mercados[i].Logo}" alt="Logo do ${objDados.mercados[i].Mercado}"></td>
                    <td>${objDados.mercados[i].Cidade} - ${objDados.mercados[i].Estado}</td><td>${objDados.mercados[i].Bairro}. ${objDados.mercados[i].RuaNumero}</td>
                    <td>${objDados.mercados[i].Telefone}</td></tr>`
    }

    strHtml += `</table>`;
    tela.innerHTML = strHtml;
    // salvaDados(objDados);
}


// ------------------- PESQUISA -------------------------

function stringPadrao(string)
{

    string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    string = string.toLowerCase()

    return string;
}

function filtraProdutos()
{
    let objDados = leProdutos ();
    let objMercado = leMercados();
    let selecionado = document.getElementById('seletorMercado').value;
    let produtoPesquisado = stringPadrao(document.getElementById('barra_pesquisa').value);
   
    let strHtml = `<div class="row">`;

    for (let i=0; i<objDados.produtos.length; i++)
    {
        const prod = objDados.produtos[i];

        for (j=0; j<objMercado.mercados.length; j++)
        {
            if ((stringPadrao(prod.Produto).indexOf(produtoPesquisado)>=0  || produtoPesquisado=='' || 
                stringPadrao(prod.Categoria).indexOf(produtoPesquisado)>=0 || 
                stringPadrao(prod.Marca).indexOf(produtoPesquisado)>=0)&& objMercado.mercados[j].id==prod.Mercado && (prod.Mercado==selecionado||selecionado==''))
            {
                strHtml += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card text-center">
                    <div class="card-header">
                        <h5>${objDados.produtos[i].Produto}</h5>
                        <h6 class="card-text">${objDados.produtos[i].Marca}</h6>
                        <p class="card-text">${objDados.produtos[i].Categoria}</p>
                    </div>
                    <div class="float-center">
                        <img src="${objDados.produtos[i].Imagem}" class="imagemCartao" width="100px" height="100px" alt="${objDados.produtos[i].Produto}"></img>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${objMercado.mercados[j].Mercado}<br>${objMercado.mercados[j].Bairro}</p>
                        <h5 class="card-title">R$${objDados.produtos[i].Preco} / ${objDados.produtos[i].Unidade}</h5>
                    </div>
                    <div class="card-footer text-muted">
                    </div>
                </div>
            </div>`;

            }
        }
    }
    strHtml += `</div>`;

    tela.innerHTML = strHtml;

    dadosMercado();
}

// ------------------- LOGIN ----------------------------

function isAdmin () 
{

    let tela = document.getElementById('sidebar');
    let strSideBar =     `<div id="logoSM"><h1><a href="index.html" class="logo">SM</a></h1></div>
                            <ul class="list-unstyled components mb-5">
                                <li class="active">
                                    <a href="index.html"><span class="fa fa-home"></span> Ínicio</a>
                                </li>
                                <li>
                                    <a href="pesquisa.html"><span class="fa fa-search"></span> Pesquisa</a>
                                </li>
                                <li>
                                    <a href="contatos.html"><span class="fa fa-paper-plane"></span> Contatos</a>
                                </li>
                                <li>
                                <a  href="#" onclick="logoutUser()"><span class="fa fa-user"></span> Logout</a>
                                </li>`;

    if (usuarioCorrente.admin){

        strSideBar +=  `
                        <li>
                            <a href="cadastroProdutos.html"> Produtos</a>
                        </li>
                        <li>
                            <a href="cadastroMercados.html"> Mercados</a>
                        </li>
                        <li>
                            <a href="usuarios.html"> Usuários</a>
                        </li>
                        <li>
                            <a href="cadastroAdm.html"> Admin</a>
                        </li>`;

    }

    strSideBar += `
                    </ul>`

    tela.innerHTML = strSideBar;
    return
}

const LOGIN_URL = "login.html";
var db_usuarios = {};
var usuarioCorrente = {};

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const dadosIniciais = {
    usuarios: [
        { "id": generateUUID (), "login": "admin", "senha": "123", admin: true, "nome": "Administrador do Sistema", "email": "admin@abc.com", "cpf": "123.456.789-99", "telefone":"(31)956431212"},
        { "id": generateUUID (), "login": "user", "senha": "123", admin: false, "nome": "Usuario Comum", "email": "user@abc.com", "cpf": "345.534.876-01", "telefone":"(66)944332321"},
    ]
};

function initLoginApp () {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
    }
    
    // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    var usuariosJSON = localStorage.getItem('db_usuarios');

    // Verifica se existem dados já armazenados no localStorage
    if (!usuariosJSON) {  // Se NÃO há dados no localStorage
        
        // Informa sobre localStorage vazio e e que serão carregados os dados iniciais

        // Copia os dados iniciais para o banco de dados 
        db_usuarios = dadosIniciais;

        // Salva os dados iniciais no local Storage convertendo-os para string antes
        localStorage.setItem('db_usuarios', JSON.stringify (dadosIniciais));
    }
    else  {  // Se há dados no localStorage
        
        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        db_usuarios = JSON.parse(usuariosJSON);    
    }
};

function loginUser (login, senha) {
    
    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];
        
        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.login = usuario.login;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.nome = usuario.nome;
            usuarioCorrente.cpf = usuario.cpf;
            usuarioCorrente.telefone = usuario.telefone;
            usuarioCorrente.admin = usuario.admin;
            
            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}

function logoutUser () {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location = LOGIN_URL;
}

function addUser (nome, login, senha, email, cpf, telefone) {
    
    // Cria um objeto de usuario para o novo usuario 
    let newId = generateUUID ();
    let usuario = { "id": newId, "login": login, "senha": senha, admin: false, "nome": nome, "email": email,"cpf": cpf, "telefone": telefone};
    
    // Inclui o novo usuario no banco de dados baseado em JSON
    db_usuarios.usuarios.push (usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
}

function addAdm (nome, login, senha, email, cpf, telefone) {
    
    // Cria um objeto de usuario para o novo usuario 
    let newId = generateUUID ();
    let usuario = { "id": newId, "login": login, "senha": senha, admin: true, "nome": nome, "email": email,"cpf": cpf, "telefone": telefone};
    
    // Inclui o novo usuario no banco de dados baseado em JSON
    db_usuarios.usuarios.push (usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
}

function salvaLoginAdm () {
    // Obtem os dados do formulário
    let login  = document.getElementById('campoUsuario').value;
    let nome   = document.getElementById('campoNome').value;
    let cpf   = document.getElementById('campoCpf').value;
    let telefone   = document.getElementById('campoTelefone').value;
    let email  = document.getElementById('campoEmail').value;
    let senha  = document.getElementById('campoSenha').value;
    let senha2 = document.getElementById('campoSenha2').value;

    if (login==''||nome==''||cpf==''||telefone==''||email==''||senha==''||senha2=='')
    {
        alert('Algum campo ainda não foi preenchido.');
        return
    }
    if (senha != senha2) {
        alert ('As senhas informadas não conferem.');
        return
    }

    // Adiciona o usuário no banco de dados
    addAdm (nome, login, senha, email, cpf, telefone);
    alert ('Usuário salvo com sucesso.');


    document.getElementById('campoUsuario').value = '';
    document.getElementById('campoNome').value = '';
    document.getElementById('campoCpf').value = '';
    document.getElementById('campoTelefone').value = '';
    document.getElementById('campoEmail').value = '';
    document.getElementById('campoSenha').value = '';
    document.getElementById('campoSenha2').value = '';
    // Oculta a div modal do login
    //document.getElementById ('loginModal').style.display = 'none';
    $('#loginModal').modal('hide');
}

function FAdm (n)
{
    if (db_usuarios.usuarios[n].admin)
    {
        return 'Admin';
    }
    else
    {
        return 'User';
    }
}

function exibeUsuarios() {
    
    // Popula a tabela com os registros do banco de dados
    let listaUsuarios = '';
    for (i = 0; i < db_usuarios.usuarios.length; i++) {
        let usuario = db_usuarios.usuarios[i];
        if (db_usuarios.usuarios[i].admin)
        {
            listaUsuarios += `<tr><td scope="row">${usuario.nome}</td><td>${FAdm(i)}</td><td>${usuario.email}</td>
                <td>${usuario.cpf}</td>  <td>${usuario.telefone}</td></tr>`;
        }
    }
    for (i = 0; i < db_usuarios.usuarios.length; i++) {
        let usuario = db_usuarios.usuarios[i];
        if (!db_usuarios.usuarios[i].admin)
        {
            listaUsuarios += `<tr><td scope="row">${usuario.nome}</td><td>${FAdm(i)}</td><td>${usuario.email}</td>
                <td>${usuario.cpf}</td>  <td>${usuario.telefone}</td></tr>`;
        }
    }

    // Substitui as linhas do corpo da tabela
    document.getElementById("table-usuarios").innerHTML = listaUsuarios

}

function initPage() {

    exibeUsuarios ();
}

// Declara uma função para processar o formulário de login
function processaFormLogin (event) {                
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados de login e senha a partir do formulário de login
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Valida login e se estiver ok, redireciona para tela inicial da aplicação
    resultadoLogin = loginUser (username, password);
    if (resultadoLogin) {
        window.location.href = 'index.html';
    }
    else { // Se login falhou, avisa ao usuário
        alert ('Usuário ou senha incorretos');
    }
}

function salvaLogin (event) {
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault ();

    // Obtem os dados do formulário
    let login  = document.getElementById('txt_login').value;
    let nome   = document.getElementById('txt_nome').value;
    let cpf   = document.getElementById('txt_cpf').value;
    let telefone   = document.getElementById('txt_telefone').value;
    let email  = document.getElementById('txt_email').value;
    let senha  = document.getElementById('txt_senha').value;
    let senha2 = document.getElementById('txt_senha2').value;
    if (senha != senha2) {
        alert ('As senhas informadas não conferem.');
        return
    }

    // Adiciona o usuário no banco de dados
    addUser (nome, login, senha, email, cpf, telefone);
    alert ('Usuário salvo com sucesso. Proceda com o login para ');

    // Oculta a div modal do login
    //document.getElementById ('loginModal').style.display = 'none';
    $('#loginModal').modal('hide');
}

// ------------------- UPLOAD ---------------------------

function uploadImage () {
    let arquivo_path = document.getElementById ('campoImagem').files[0];
    let fr = new FileReader ();

    fr.onloadend = function () {
        document.getElementById ('tela').innerHTML = `<img src="${fr.result}">`
        
        let album = JSON.parse (localStorage.getItem ('album'));
        if (!album) {
            album = []
        }
        let nome = document.getElementById ('inputNome').value
        let img = fr.result
        
        let foto = { nome, img }
        album.push (foto);

        localStorage.setItem ('album', JSON.stringify (album));
    }

    fr.readAsDataURL (arquivo_path); 
}

function logoNome(){
    logo = document.getElementById("logoSM");
    if (logo.innerHTML == `<h1><a href="index.html" class="logo">SM</a></h1>`)
    {
        setTimeout(function () 
        {
            logo.innerHTML = `<h3><a href="index.html" class="logo">SmartMarket</a></h3>`;
        },150);    
    }
    else
    {
        logo.innerHTML = `<h1><a href="index.html" class="logo">SM</a></h1>`;
    }
}


// ------------------- BOTOES ---------------------------

initLoginApp ();
