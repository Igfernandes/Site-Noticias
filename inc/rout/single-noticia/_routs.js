module.exports = function(app){

    app.get("/noticia", function(req, res){
      
        app.data.controllers.single_noticia.controllerSingleNoticia.index(app, req, res);
    })
}