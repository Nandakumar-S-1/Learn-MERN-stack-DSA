function IntervalFun(){
    let count=0
    let val = setInterval(()=>{
        console.log(count);
        count++

        if(count>5){
            clearInterval(val)
        }
    },1000)
}
IntervalFun()