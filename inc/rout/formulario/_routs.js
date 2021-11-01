module.exports = function(app){
    app.get("/formulario", function(req, res){
       console.log(app.data.controllers.formulario.controllerFormulario.index(app, req, res))
    })
}