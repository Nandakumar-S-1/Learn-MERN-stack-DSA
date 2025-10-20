let {exec,execFile,spawn} = require("child_process")

//exec

exec('ls',(error,stdout,stderr)=>{
    if(error){
        console.log(error)
    }
    if(stderr){
        console.error(stderr)
    }

    console.log(stdout)
})

//execfile

execFile("node",["-v"],(error,stdout)=>{
    if(error) throw error
    console.log(stdout)
})


//spawn

let ls = spawn('ls',['-lh','.'])
ls.stdout.on('data',data=>console.log(data.toString()))
ls.stderr.on('data',data=>console.error(data.toString()))
ls.on('close',code=>console.log("closed........",code))
