/**
 * @CONECT_DATABASE
 * 
 * @sql - Quarda os métodos necessários para fazer uma conexão com o banco de dados com o módulo "mysql"
 * @$cnt - Armazena todos os dados e métodos necessários para fazer uma requisição ao banco de dados.
 **/

const sql = require('mysql');

//Encapsulamento para evitar requisições desnecessárias.
const $cnt = function(){
    return sql.createConnection({
        host: "localhost",
        user: 'root',
        password: "",
        database: "portal_noticias"
    });
    console.log("A conexão com o banco de dados foi estabelecida")
}

module.exports = function(){
    console.log("Modulo de conexão ao DB: Carregado!")
    return $cnt
}