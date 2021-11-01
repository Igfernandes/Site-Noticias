module.exports = function(app){
    

    app.get('/noticias', function(req, res){
        app.data.controllers.noticias.controllerNoticias.index(app, req, res)
    })

}