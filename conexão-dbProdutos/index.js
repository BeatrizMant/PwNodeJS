const express = require('express')
const env = require('dotenv')

// Imports Cliente
const {buscarClientes, buscarCliente} = require('./src/DAO/cliente/buscar_cliente.js')
const {incluirCliente} = require('./src/DAO/cliente/inserir_cliente.js')
const { deletarCliente } = require('./src/DAO/cliente/deletar_cliente.js')
const { editarParcialmenteCliente } = require('./src/DAO/cliente/editar_parcialmente_cliente.js')
const { editarIntegralmenteCliente } = require('./src/DAO/cliente/editar_integralmente_cliente.js')
const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')

// Imports Categoria
const {buscarCategorias, buscarCategoria} = require('./src/DAO/categoria/buscar_categoria.js')
const {incluirCategoria} = require('./src/DAO/categoria/inserir_categoria.js')
const { deletarCategoria } = require('./src/DAO/categoria/deletar_categoria.js')
const { editarParcialmenteCategoria } = require('./src/DAO/categoria/editar_parcialmente_categoria.js')
const { editarIntegralmenteCategoria } = require('./src/DAO/categoria/editar_integralmente_categoria.js')

// Imports Produtos
const { buscarProdutos, buscarProduto } = require('./src/DAO/produtos/buscar_produto.js')
const {incluirProduto} = require('./src/DAO/produtos/inserir_produto.js')
const { deletarProduto } = require('./src/DAO/produtos/deletar_produto.js')
const { editarParcialmenteProduto } = require('./src/DAO/produtos/editar_parcialmente_produto.js')
const { editarIntegralmenteProduto } = require('./src/DAO/produtos/editar_integralmente_produto.js')

// Imports Status
const { buscarTodosStatus, buscarStatus } = require('./src/DAO/status/buscar_status.js')
const {incluirStatus} = require('./src/DAO/status/inserir_status.js')
const { deletarStatus } = require('./src/DAO/status/deletar_status.js')
const { editarParcialmenteStatus } = require('./src/DAO/status/editar_parcialmente_status.js')
const { editarIntegralmenteStatus } = require('./src/DAO/status/editar_integralmente_status.js')

// Imports Endereço 
const { buscarTodosEnderecos, buscarEndereco } = require('./src/DAO/endereco/buscar_endereco.js')
const { incluirEndereco } = require('./src/DAO/endereco/inserir_endereco.js')
const { deletarEndereco } = require('./src/DAO/endereco/deletar_endereco.js')
const { editarParcialmenteEndereco } = require('./src/DAO/endereco/editar_parcialmente_endereco.js')
const { editarIntegralmenteEndereco } = require('./src/DAO/endereco/editar_integralmente_endereco.js')

// Imports Pedido
const { buscarPedidos, buscarPedido} = require('./src/DAO/pedido/buscar_pedido.js')
const { incluirPedido } = require('./src/DAO/pedido/inserir_pedido.js')
const { deletarPedido } = require('./src/DAO/pedido/deletar_pedido.js')
const { editarParcialmentePedido } = require('./src/DAO/pedido/editar_parcialmente_pedido.js')
const { editarIntegralmentePedido } = require('./src/DAO/pedido/editar_integralmente_pedido.js')

// Imports Itens Pedido
const { buscarItempedidos, buscarItempedido } = require('./src/DAO/itemPedido/buscar_itemPedido.js')
const { incluirItemPedido } = require('./src/DAO/itemPedido/inserir_itemPedido.js')
const { deletarItemPedido } = require('./src/DAO/itemPedido/deletar_itemPedido.js')
const { editarParcialmenteItemPedido } = require('./src/DAO/itemPedido/editar_parcialmente_itemPedido.js')
const { editarIntegralmenteItemPedido } = require('./src/DAO/itemPedido/editar_integralmente_itemPedido.js')


const app = express()
env.config()

app.use(
    express.urlencoded({
        extended: true
    })
  )
  
  app.use(express.json())
  


app.get('/', (req, res) => {
  res.send('Hello World')
})

// ROTAS TABELA CLIENTE

// Apresenta a tabela de clientes
app.get('/firma/1.0.0/clientes', async (req, res) =>{
    
    let clientes = await buscarClientes()
    res.json(clientes)
})

// Devolve cliente pelo código
app.get('/firma/1.0.0/cliente/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let cliente = await buscarCliente(codigo)
    res.json(cliente)
})

// Cadastra um novo cliente
app.post('/firma/1.0.0/cliente', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [codigo, nome, telefone, limite, id_endereco, id_status]
   let result = await incluirCliente(infos)
    res.json(result)
})

// Edita um cliente
app.put('/firma/1.0.0/cliente', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [telefone, nome, limite, id_endereco, id_status]
    let result = await editarIntegralmenteCliente(infos, codigo)
    res.status(200).json(result)
})

// Edita um campo de determinado cliente
app.patch('/firma/1.0.0/cliente', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteCliente(codigo, campo, valor)
    res.status(200).json(result)
})

// Deletar cliente
app.delete('/firma/1.0.0/cliente', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarCliente(codigo)
    res.json(result)
})


// ROTAS TABELA CATEGORIA

// Apresenta a tabela de categorias
app.get('/firma/1.0.0/categorias', async (req, res) =>{
    
    let categorias = await buscarCategorias()
    res.json(categorias)
})

// Devolve categoria pelo código
app.get('/firma/1.0.0/categoria/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let categoria = await buscarCategoria(codigo)
    res.json(categoria)
})

// Cadastra uma nova categoria
app.post('/firma/1.0.0/categoria', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
   let result = await incluirCategoria(infos)
    res.json(result)
})

// Edita uma categoria
app.put('/firma/1.0.0/categoria', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
    let result = await editarIntegralmenteCategoria(infos, id)
    res.status(200).json(result)
})

// Edita um campo de determinado categoria
app.patch('/firma/1.0.0/categoria', async (req, res) =>{
    let {id, campo, valor } = req.body
    let result = await editarParcialmenteCategoria(id, campo, valor)
    res.status(200).json(result)
})

// Deleta categoria
app.delete('/firma/1.0.0/categoria', async (req, res) =>{
    let { id } = req.body
    let result = await deletarCategoria(id)
    res.json(result)
})


// ROTAS TABELA PRODUTOS

// Apresenta a tabela de categorias
app.get('/firma/1.0.0/produtos', async (req, res) =>{
    
    let produtos = await buscarProdutos()
    res.json(produtos)
})

// Devolve categoria pelo código
app.get('/firma/1.0.0/produto/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let produto = await buscarProduto(codigo)
    res.json(produto)
})

// Cadastra um novo produto
app.post('/firma/1.0.0/produto', async (req, res) =>{
    let {codigo, nome, id_categoria, preco} = req.body
    const infos = [codigo, nome, id_categoria, preco]
   let result = await incluirProduto(infos)
    res.json(result)
})

// Edita um produto
app.put('/firma/1.0.0/produto', async (req, res) =>{
    let {codigo, nome, id_categoria, preco} = req.body
    const infos = [codigo, nome, id_categoria, preco]
    let result = await editarIntegralmenteProduto(infos, codigo)
    res.status(200).json(result)
})

// Edita um campo de determinado produto
app.patch('/firma/1.0.0/produto', async (req, res) =>{
    let {codigo, campo, valor } = req.body
    let result = await editarParcialmenteProduto(codigo, campo, valor)
    res.status(200).json(result)
})

// Deleta produto
app.delete('/firma/1.0.0/produto', async (req, res) =>{
    let { codigo } = req.body
    let result = await deletarProduto(codigo)
    res.json(result)
})

// ROTAS TABELA STATUS
// Apresenta a tabela de status 
app.get('/firma/1.0.0/todosStatus', async (req, res) =>{
    let status = await buscarTodosStatus()
    res.json(status)
})

// Devolve status pelo código ** rever
app.get('/firma/1.0.0/status/:id', async (req, res) =>{
    let id = parseInt( req.params.id)
    let status = await buscarStatus(id)
    res.json(status)
})

// Cadastra um novo status
app.post('/firma/1.0.0/status', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
   let result = await incluirStatus(infos)
    res.json(result)
})

// Edita um status
app.put('/firma/1.0.0/status', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
    let result = await editarIntegralmenteStatus(infos, id)
    res.status(200).json(result)
})

// Edita um campo de determinado status
app.patch('/firma/1.0.0/status', async (req, res) =>{
    let {id, campo, valor } = req.body
    let result = await editarParcialmenteStatus(id, campo, valor)
    res.status(200).json(result)
})

// Deleta status
app.delete('/firma/1.0.0/status', async (req, res) =>{
    let { id } = req.body
    let result = await deletarStatus(id)
    res.json(result)
})



// ROTAS TABELA ENDEREÇO

// Apresenta a tabela de endereços
app.get('/firma/1.0.0/enderecos', async (req, res) =>{
    let enderecos = await buscarTodosEnderecos()
    res.json(enderecos)
})

// Devolve endereço pelo código
app.get('/firma/1.0.0/endereco/:id', async (req, res) =>{
    let id = parseInt( req.params.id)
    let endereco = await buscarEndereco(id)
    res.json(endereco)
})

// Cadastra um novo endereco
app.post('/firma/1.0.0/endereco', async (req, res) =>{
    let {id, logradouro, cep, numero, bairro, cidade} = req.body
    const infos = [id, logradouro, cep, numero, bairro, cidade]
   let result = await incluirEndereco(infos)
    res.json(result)
})

// Edita um endereco
app.put('/firma/1.0.0/endereco', async (req, res) =>{
    let {id, logradouro, cep, numero, bairro, cidade} = req.body
    const infos = [id, logradouro, cep, numero, bairro, cidade]
    let result = await editarIntegralmenteEndereco(infos, id)
    res.status(200).json(result)
})

// Edita um campo de determinado endereco
app.patch('/firma/1.0.0/endereco', async (req, res) =>{
    let {id, campo, valor } = req.body
    let result = await editarParcialmenteEndereco(id, campo, valor)
    res.status(200).json(result)
})

// Deleta categoria
app.delete('/firma/1.0.0/endereco', async (req, res) =>{
    let { id } = req.body
    let result = await deletarEndereco(id)
    res.json(result)
})




// ROTAS TABELA PEDIDOS

// Apresenta a tabela de pedidos
app.get('/firma/1.0.0/pedidos', async (req, res) =>{
    
    let pedido = await buscarPedidos()
    res.json(pedido)
})

// Devolve pedido pelo código
app.get('/firma/1.0.0/pedido/:numero', async (req, res) =>{
    let numero = parseInt( req.params.numero)
    let pedido = await buscarPedido(numero)
    res.json(pedido)
})

// Cadastra um novo pedido
app.post('/firma/1.0.0/pedido', async (req, res) =>{
    let {numero, data_elaboracao, cliente_id} = req.body
    const infos = [numero, data_elaboracao, cliente_id]
   let result = await incluirPedido(infos)
    res.json(result)
})

// Edita um pedido
app.put('/firma/1.0.0/pedido', async (req, res) =>{
    let {numero, data_elaboracao, cliente_id} = req.body
    const infos = [numero, data_elaboracao, cliente_id]
    let result = await editarIntegralmentePedido(infos, numero)
    res.status(200).json(result)
})

// Edita um campo de determinado pedido
app.patch('/firma/1.0.0/pedido', async (req, res) =>{
    let {numero, campo, valor } = req.body
    let result = await editarParcialmentePedido(numero, campo, valor)
    res.status(200).json(result)
})

// Deleta categoria
app.delete('/firma/1.0.0/pedido', async (req, res) =>{
    let { numero } = req.body
    let result = await deletarPedido(numero)
    res.json(result)
})





// ROTAS TABELA ITENS PEDIDOS

// Apresenta a tabela de itens pedido
app.get('/firma/1.0.0/itempedidos', async (req, res) =>{
    
    let itempedidos = await buscarItempedido();
    res.json(itempedidos)
})

// Devolve itens pedidos pelo código
app.get('/firma/1.0.0/itempedido/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let itempedido = await buscarItempedido(codigo)
    res.json(itempedido)
})

// Cadastra um novo item pedido
app.post('/firma/1.0.0/itempedido', async (req, res) =>{
    let { id, id_pedido, id_produto, qnt} = req.body
    const infos = [ id, id_pedido, id_produto, qnt]
   let result = await incluirItemPedido(infos)
    res.json(result)
})

// Edita um itens pedidos
app.put('/firma/1.0.0/itempedido', async (req, res) =>{
    let { id, id_pedido, id_produto, qnt} = req.body
    const infos = [ id, id_pedido, id_produto, qnt]
    let result = await editarIntegralmenteItemPedido(infos, id)
    res.status(200).json(result)
})

// Edita um campo de determinado itens pedidos
app.patch('/firma/1.0.0/itempedido', async (req, res) =>{
    let {id, campo, valor } = req.body
    let result = await editarParcialmenteItemPedido(id, campo, valor)
    res.status(200).json(result)
})

// Deleta itens pedidos
app.delete('/firma/1.0.0/itempedido', async (req, res) =>{
    let { id } = req.body
    let result = await deletarItemPedido(id)
    res.json(result)
})


app.listen(process.env.PORTA, () => {
    console.log(`Operando na porta ${process.env.PORTA}`), 
    testarConexao(conexao())
})