/**
 * @SERVER 
 * 
 * @app - Variável responsável pelo armazenamento da requisição http
 * e todo controle do servidor. 
 **/

const app = require('./config/_server');



/**
 * @START_SERVER
 * 
 * #Info - Declaração para iniciar o servidor.
 */

app.listen(300, ()=>{
    console.log("Servidor: ON");
})