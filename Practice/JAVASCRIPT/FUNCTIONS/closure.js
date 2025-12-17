function outer(){
    let a=8
    let b=2
    function inner(){
        let c=5
        console.log(a+b+c);
    }
    inner()
}
outer()