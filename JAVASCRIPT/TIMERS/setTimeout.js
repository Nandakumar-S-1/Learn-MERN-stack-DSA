function A(){
    for(let i=0;i<=5;i++){
        setTimeout(()=>{
            console.log(i)            
        },1000)
    }
}
A()


let i=10
setTimeout(()=>{
    while(i>=1){
        console.log(i)
        i--
    }
},1000)