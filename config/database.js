const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userNovo:carol2512@fiaptecnico.qn4cl.mongodb.net/todo_list')
}

module.exports = conn
