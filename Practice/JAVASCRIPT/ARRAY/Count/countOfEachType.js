let arr=[true,'a',3,2,7,'0',false,false,'5','y',1]

let b=0,s=0,n=0 
for(let i=0;i<arr.length;i++){
  if(typeof arr[i]==='boolean'){
    b++
  }else if(typeof arr[i]==='number'){
    n++
  }else {
    s++
  }
}
console.log(b,s,n)