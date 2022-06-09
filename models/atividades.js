const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    //diferencia caractéres minusculos e maiúsculos = Case sensitive
    data: Date,
    tipo: String,
    entrega: String,
    disciplina: String,
    instrucoes: String,
    usuario: String,
    titulo: String, 
    status:{type:String,default:"0"}
})

const atividades = mongoose.model('atividades', modelo)

module.exports = atividades