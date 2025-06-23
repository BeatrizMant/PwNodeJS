const {conexao} = require('../conexao.js')

async function incluirCategoria(infos) {
    const sql = `INSERT INTO tbl_categoria (id, nome) VALUES (?, ?)`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, infos)
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

module.exports = {incluirCategoria}




