module.exports.index = function(app, req, res){
    const $cnt = app.data.connect();
    const $query = app.data.models.noticia._mod

    $query.struct = $cnt
    $query.callback = (err, resp)=>{
        res.render("noticias/_view", {noticias: resp})
    }
    
    $query.get_field_all()
}