process.on('message',(mes)=>{
    console.log('child got mes ',mes);
    process.send({status:'done'})
    
})