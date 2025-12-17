let i=1
let interval = setInterval(()=>{
    console.log(i);
    if(i===10) clearInterval(interval)
    i++    
},1000)
