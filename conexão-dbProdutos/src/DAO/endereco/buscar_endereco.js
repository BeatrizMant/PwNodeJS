const {conexao} = require('../conexao.js')


async function buscarTodosEnderecos(){
  console.log('DAO de ENDERECO')
    const sql = `SELECT * FROM tbl_endereco;`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

async function buscarEndereco(id){
    const sql = `SELECT * FROM tbl_categoria WHERE id = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [id]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}


module.exports = {buscarEndereco, buscarTodosEnderecos}