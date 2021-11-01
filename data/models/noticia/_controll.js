module.exports = function(app){

    /**
     *  @SAVE_DB
     */

    app.post("/admin/noticia/controls", (req, res)=>{
        
        const $cnt = app.data.connect();
        const $query = app.data.models.noticia._mod

        $query.struct = $cnt;
        $query.callback = (err, resp)=>{
            if(err != null){
                console.log(err)
            }
        }

        req.assert('titulo', 'O Título é obrigatório').notEmpty();
        req.assert('autor', 'O nome do autor é obrigatório').notEmpty();
        req.assert('ocorrencia', 'A data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('resumo', 'O resumo é obrigatório').notEmpty();
        req.assert('resumo', 'O resumo deve conter entre 10 a 100 caracteres').len(10, 100);

        let error = req.validationErrors();

        if(error){
            res.render("formulario/error/_view", {error, noticia: req.body});
            return;
        }

        $query.request = {
            titulo: req.body.titulo,
            autor: req.body.autor,
            resumo: req.body.resumo,
            ocorrencia: req.body.ocorrencia,
            conteudo: req.body.conteudo
        }
        $query.set_field_all();
        res.redirect('/noticias')
    }) 
}
