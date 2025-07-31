function Insertion(arr){
    for(let i=0;i<arr.length;i++){
        let num=arr[i]
        let s=i-1
        while(s>=0 && arr[s]>num){
            arr[s+1]=arr[s]
            s=s-1
        }
        arr[s+1]=num
    }
    return arr
}
console.log(Insertion([2,5,1,6,4]));
