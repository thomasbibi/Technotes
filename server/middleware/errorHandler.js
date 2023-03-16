const {logEvents} = require('./logger')

const errorHandler = (e,req,res,next)=>{
    logEvents(`${e.name}:${e.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,"errLog.log")
    console.log(e.stack)

    const status = res.statusCode ? res.statusCode : 500  //server error

    res.status(status)

    res.json({message : e.message})
}

module.exports = errorHandler