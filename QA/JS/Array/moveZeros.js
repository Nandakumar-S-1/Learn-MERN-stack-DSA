let arr=[1,2,3,0,5,0,0,2,0,1,2,0,4]

for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
        arr.splice(i,1)
        arr.unshift(0)
    }
 }
 console.log(arr)