let a=[1,2,3]
let b=[2,4,5,6]
let res=[]

for(let i=0;i<a.length;i++){
    res[res.length]=a[i]
}
for(let i=0;i<b.length;i++){
    let found=false
    for(let j=0;j<res.length;j++){
        if(res[j]==b[i]){
            found=true
        }
    }
    if(!found){
        res[res.length]=b[i]
    }
}
console.log(res)