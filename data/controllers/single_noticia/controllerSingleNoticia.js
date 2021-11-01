module.exports.index = function(app, req, res){
    
    const $cnt = app.data.connect();
    const $query = app.data.models.noticia._mod

    $query.struct = $cnt;
    $query.callback =  (err, resp)=>{
        res.render("single-noticia/_view", {noticia: resp})
    }
    $query.request = `id_noticia = ${req.query.id}`

    
    $query.get_field();
}