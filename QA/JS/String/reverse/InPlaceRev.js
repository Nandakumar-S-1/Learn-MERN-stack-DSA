let str='hello world'
let res=''
let arr=str.split(' ')
for(let i=0;i<arr.length;i++){
    let single = arr[i]
    
    for(let j=single.length-1;j>=0;j--){
        res+=single[j]
    }
    if(i !== arr.length - 1){
        res += ' '
    }
}
console.log(res)