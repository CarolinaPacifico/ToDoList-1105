module.exports = (app)=>{

    //abrir o arquivo login.js
    app.get('/login',(req,res)=>{
        res.render('login.ejs')
    })

    //validar o usuário e senha
    app.post('/login',async(req,res)=>{
        
        //recuperar informações digitadas no formulário
        var dados = req.body

        //comparar com o banco de dados
        var database = require('../config/database')()

        //selecionar a model usuários
        var usuarios = require('../models/usuarios')

        //verificar se o email está cadastrado
        var verificar = await usuarios.findOne({email:dados.email})
        if(!verificar){
            return res.send("Email não Cadastrado!")
        }
        var crypt = require('bcryptjs')
        var comparar = await crypt.compare(dados.senha,verificar.senha)
        if(!comparar){
            return res.send("Senha Inválida!")
        }
        res.render("atividades.ejs")
    })
}