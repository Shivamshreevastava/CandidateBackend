const errorHandler = (error,res)=>{
    console.log(error);
    res.status(error.status||9000)
    res.json({
        message:error.message
    })
}

module.exports = errorHandler;
