module.exports = (app)=>{

    //abrir o arquivo registro.js
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    //gravar as infomações digitadas no mongoAtlas
    app.post('/registro', async(req,res)=>{

        //recuperar as informações digitadas
        var dados = req.body

        //importar as configrações do database
        var databse = require('../config/database')()
        
        //definir em qual coleção vamos gravar
        var usuarios = require('../models/usuarios')

        //verificar se o email ja está cadastrado
        var verificar = await usuarios.findOne({email:dados.email})
        if(verificar){
           return res.send('Email já cadastrado')
        }

        //criptografar a senha
        var crypt = require("bcryptjs")
        var senhasegura = await crypt.hash(dados.senha,10)

        //gravar o documento
        var documento = await new usuarios({
            nome: dados.nome,
            email: dados.email,
            senha: senhasegura
        }).save()
        res.redirect('/login')
    })
}