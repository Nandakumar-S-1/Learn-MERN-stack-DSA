function RemoveDup(arr){
    let res=[]
    let visited={}
    for(let i=0;i<arr.length;i++){
        let num=arr[i]
        if(num%2===0 && !visited[num]){
            res[res.length]=num
            visited[num]=true
        }else if(num%2!==0){
            res[res.length]=num
        }
    }
    return res
}
console.log(RemoveDup([1,2,3,4,2,3,5,6,7,6,8]));
