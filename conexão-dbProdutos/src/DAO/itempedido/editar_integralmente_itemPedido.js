const {conexao} = require('../conexao.js')

async function editarIntegralmenteItemPedido(infos, id){

    const sql = `UPDATE tbl_itempedido SET id = ?, id_pedido = ?, id_produto = ?, qnt = ? WHERE id = ${id} ;`
    const conn = await conexao()

    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[...infos]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarIntegralmenteItemPedido}