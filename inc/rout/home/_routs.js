module.exports = function(app){
    app.get("/", function(req, res){
        app.data.controllers.home.controllerHome.index(app, req, res)
    })
}