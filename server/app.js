const express = require("express")
const app = express()
const mongosee = require("mongoose")
const PORT = 5000
const{MONGOURI} =require ('./keys')
require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))
mongosee.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongosee.connection.on('connected',()=>{
    console.log("connected to mongo Db")
})
mongosee.connection.on('error',()=>{
    console.log("err connecting",err)
})



app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})  