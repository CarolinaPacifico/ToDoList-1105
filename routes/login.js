module.exports = (app)=>{

    //abrir o arquivo login.js
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })
}