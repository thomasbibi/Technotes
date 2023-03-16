require('dotenv').config()
const express = require("express")
const app = express()
const path = require('path')
const {logger, logEvents} = require("./middleware/logger")
const cors = require('cors')
const PORT = process.env.PORT || 3500
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const connectDB = require('./Config/dbConn')


connectDB()
app.use(logger)
app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use('/',express.static(path.join(__dirname , 'public'))) //telling express where to find static files or other resources(pics)
app.use('/', require('./routes/root'))
app.use('/users',require('./routes/userRoutes'))
app.use('/notes' , require('./routes/noteRoutes'))
app.all('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }
    else if(req.accepts('json')){
        res.json({message : "404 Not Found"})
    }
    else{
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

mongoose.connection.once('open',()=>{
    console.log('connected to MongoDB')
    app.listen(PORT, ()=>console.log(`Server up at ${PORT}`))
})

mongoose.connection.on('error' , err=>{
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,'mongoErrLog.log')
})
