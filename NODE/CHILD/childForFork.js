process.on("message",(msg)=>{
    console.log(`child got a message: ${msg}`);
    process.send({result:"done"})
})