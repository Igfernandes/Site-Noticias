class Noticia {
    constructor($info){
        this.struct = $info.struct;
        this.callback = $info.callback;
        this.request = $info.request;
        this.value;
    }

    get_field(){
        this.struct.query(`SELECT * FROM noticias WHERE ${this.request}`, this.callback);
    }

    get_field_all(){
        this.struct.query(`SELECT * FROM noticias`, this.callback);
    }

    set_field_all(){
        this.struct.query(`INSERT INTO noticias(titulo, autor, resumo, data_noticia, noticia) VALUES ('${this.request.titulo}','${this.request.autor}','${this.request.resumo}','${this.request.ocorrencia}','${this.request.conteudo}')`, this.callback)
        
        //this.struct.query('INSERT INTO noticias set ?', this.request, this.callback );
    }
    get_notices(){
        this.struct.query(`SELECT * FROM noticias ORDER BY data_criacao desc limit ${this.value}`, this.callback)
    }
}

module.exports = new Noticia({import: "null"});