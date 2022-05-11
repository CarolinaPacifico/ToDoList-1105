//immportar o pacote express
const express = require('express')
//const express = require('express')()

//executar o express
const app = express()

//definir a porta para o servidor
const porta = process.env.PORT || 3030 //usado para pegar uma porta disponível 

//exportar app e porta
module.exports = {app,porta}



