const {conexao} = require('../conexao.js')


async function buscarTodosStatus(){
  console.log('DAO de STATUS')
    const sql = `SELECT * FROM tbl_status;`
    
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

async function buscarStatus(id){
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


module.exports = {buscarStatus, buscarTodosStatus}