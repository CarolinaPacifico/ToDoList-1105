module.exports = (app)=>{

    //abrir o arquivo registro.js
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })
}