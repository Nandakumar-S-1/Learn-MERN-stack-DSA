// class Node{
//     constructor(val){
//         this.val=val
//         this.left=null
//         this.right=null
//     }
// }

// function isFull(node){
//     if(node===null)return true
//     if(!node.left&&!node.right){
//         return true
//     }
//     if(!node.left || !node.right){
//         return false
//     }
//     return isFull(node.left)&&isFull(node.right)
// }

// const root=new Node(1)
// root.left=new Node(4)
// root.right=new Node(2)
// // root.left.left=new Node(5)

// console.log(isFull(root))



let arr = [3,5,1,6,4,7,8,6,8]

// function bubble(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//     }
//     console.log(arr)
// }

// bubble(arr)





// function Insertion(arr){
//     for(let i=0;i<arr.length;i++){
//         let num=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>num){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=num
//     }
//     return arr
// }
// console.log(Insertion(arr));






////////////////////////

// function QuickSort(arr){
//     if(arr.length<2)return arr
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot)left.push(arr[i])
//         else right.push(arr[i])
//     }
//     return [...QuickSort(left),pivot,...QuickSort(right)]
// }
// console.log(QuickSort(arr));



////////////////////////////////

// function mergeSort(arr){
//     if(arr.length<2)return arr
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)

//     return Merge(mergeSort(left),mergeSort(right))
// }

// function Merge(left,right){
//     let sorted=[]
//     while(left.length && right.length){
//         if(left[0]>=right[0]){
//             sorted.push(right.shift())
//         }else{
//             sorted.push(left.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort(arr));




// ///////////////////////////////////
// console.log(arr);

// function BS(arr,target){
//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(target===arr[mid]){
//             return mid
//         }
//         else if(target<arr[mid]){
//             right=mid-1
//         }
//         else {
//             left=mid+1
//         }
//     }
//     return -1
// }
// console.log(BS([1,2,3,4,5,6],4));



////////////////////////////

// class Node{
//     constructor(val){
//         this.val=val
//         this.next=null
//     }
// }

// class LL{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     prepend(val){
//         let node=new Node(val)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }else{
//             let curr=this.head
//             let list=''
//             while(curr){
//                 list+=`${curr.val}=>`
//                 curr=curr.next
//             }
//             return list
//         }
//     }
//     reverse(){
//         let prev=null
//         let curr=this.head
//         let next=null
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
//     search(val){
//         let curr=this.head
//         let index=0
//         while(curr){
//             if(curr.val===val){
//                 return index
//             }
//             curr=curr.next
//             index++
//         }
//         return -1
//     }
// }



////////////////////////////////
// function Factorial(n){
//     if(n===0)return 1
//     return Factorial(n-1)*n
// }
// console.log(Factorial(5));



// function Fibonacci(i,res=[],fst=0,sec=1){
//     if(i===0)return res
//     res.push(fst)
//     return Fibonacci(i-1,res,sec,fst+sec)
// }
// console.log(Fibonacci(8));

// //////////////////////////
// class Node{
//     constructor(val){
//         this.val=val
//         this.next=null
//     }
// }

// let a=new Node(1)
// let b=new Node(2)
// let c=new Node(3)
// let d=new Node(4)


// a.next=b
// b.next=c
// c.next=d
// d.next=a

// function isCycle(node){
//     let slow=node
//     let fast=node
//     while(fast&& fast.next){
//         slow=slow.next
//         fast=fast.next.next
//         if(slow===fast)return true
//     }
//     return false
// }

// console.log(isCycle(a));


////////////////////////////////////


// let express=require('express')
// const app=express()
// let router=express.Router()

// router.use((req,res,next)=>{
//     console.log('router middle ware')
//     next()
// })

// router.get('/',(req,res)=>{
//     res.send('home route')
// })


// router.get('/shop',(req,res)=>{
//     res.send('shop route')
// })

// app.use('/all',router)
// app.listen(3000,()=>{
//     console.log(`server is running... http://localhost:${3000}`);
// })





