// let a =[1, 2, 3, 4, 5, 6]

// let sum = a.reduce((acc,cuu)=>{
//     if(cuu%2==0){
//   return acc+cuu
//     }
//     return acc
    
// },0)
// console.log(sum)

// let a = [1, 2, 2, 3, 4, 4, 5]
// let b=a.filter((value,index,arr)=>{
//     return  arr.indexOf(value) == index
// })
// console.log(b)


// let a =["hi", "hello", "ok", "fine", "yes"]


// let b = a.filter((value)=>{
//     return value.length >3
// })
// console.log(b)




// let a =[10, 5, 20, 15,33]
// let max =0
// let b = a.reduce((acc,cuu)=>{
//     if(max<cuu){
//         acc= max
//         max = cuu
//     }else
//     if(acc<max&& acc<cuu){
//         acc=cuu
//     }
//     return acc
// })

// console.log(b)



// let a=["apple", "banana", "apple", "orange", "banana", "apple"]



// let obj= {}

// for( let i of a){
//     obj[i] = (obj[i]||0)+1
// }

// console.log(obj)




// let f = "hello"
// let g = f.split('').reverse().join('')
// console.log(g)



// "madam" → true  
// "hello" → false  
// "racecar" → true


// function palidrome(pali,left=0,right=pali.length-1){
//     if(left>=right){
//         return true
//     }
//     if(pali[left]!==pali[right]){
//         return false
//     }
//         return palidrome(pali,left+1,right-1)
// }

// console.log(palidrome("malayala"))



// let a ="hello world from javascript"

// let b= a.split(' ')
// console.log(b)
// let c = b.map((val)=>{
//     return val[0].toUpperCase() + val.slice(1)
// })
// console.log(c.join(' '))




// let c ="javascript is awesome"
//  let e =["a","e","i","o","u"]
 
// let d = c.split('').filter((u)=>{
//  return !e.includes(u)
// }).join('')
// console.log(d)

// let a ="aabbbbccddd"
// let obj ={}
// for(let i of a){
//   obj[i] =(obj[i]||0)+1
// }
// console.log( Object.entries(obj))

// let red = Object.entries(obj).reduce((acc,cuu)=>{
//     if(acc[1]<cuu[1]){
//         return acc[0] =cuu[0]
//     }
//     return acc
// })
// console.log(red)

// {
//   1: ["d"],
//   2: ["b"],
//   3: ["a"],
//   4: ["c"]
// }


// let a = "aaabbccccd"

// let obj = {}
// for(let i of a){
//     obj[i] = (obj[i]||0)+1
// }

// let grouped = Object.entries(obj).reduce((acc, [char, count]) => {
//     if (!acc[count]) {
//         acc[count] = [];
//     }
//     acc[count].push(char);
//     return acc;
// }, {});


// console.log(obj)
// console.log(grouped)



// Use reduce to sum positive numbers


// let a = [1,2,1,2,4,-8,-9,5]

// let sum = a.reduce((acc,cuu)=>{
//     if(cuu>0){
//         return acc+cuu
//     }
//     return acc
// })
// console.log(sum)

// Object key with highest value

// let obj = {a:4,
//     b:7,
//     c:8,
//     d:6
// }
// let max =0
// let key =""
// for( let i in obj){
//     if(max<obj[i]){
//         max = obj[i]
//         key =i
//     }
    
// }

// console.log(key)


// Input: [1,3,0,5,0,5,0] → Output: [1,3,5,5,0,0,0]

// let a=[1,3,0,5,0,5,0]
// let index =0
// for(let i=0;i<a.length;i++){
//     if(a[i]!==0){
//       a[index]=a[i] 
//       index++
//     }
// }

// while(index<a.length){
//     a[index]=0
//     index++
// }
// console.log(a)


// JS - Heap sort algorithm


// function heap(arr){
//     let n = arr.length
//     for(let i =Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i=n-1;i>=0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }


// function heapify(arr,n,i){
//     let largest =i
//     let left = i*2+1
//     let right = i*2+2
    
//     if(left<n&& arr[left]>arr[largest]){
//         largest = left
//     }
//      if(right<n&& arr[right]>arr[largest]){
//         largest = right
//     }
//     if(i!==largest){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
    
// }

// console.log(heap([12,5,4,32,2]))



// Find second largest number using loop (not sort)


// let a = [2,3,45,3,1,2,7,9,10,112]

// let max = 0
// let second =0

// for(let i=0;i<a.length;i++){
//     if(max<a[i]){
//          second = max
//         max = a[i]
//     }else if(second<max&& second<a[i]){
        
//         second =a[i]
//     }
    
// }

// console.log(second)



// Find sum of prime numbers



// let arr =[1,2,3,5,6,7,8,9,11,13]
// let sum = 0

// for(let i =0;i<arr.length;i++){
//     let count =0
//     if(arr[i]<2){
//         count = 1
//     }
//     for(let j=2;j<arr[i];j++){
//         if(arr[i]%j==0){
//             count =1
//         }
//     }
//     if(count ==0){
//         sum+= arr[i]
//     }
// }

// console.log(sum)


// Input: s = "abcd", t = "acebd" → Output: "e"

// let s = "abcd"
// let  t = "acebd"
//  let obj ={}
// let obj2 = {}

// for(let i of s){
//     obj[i] = (obj[i]||0) +1
// }

// for(let i of t){
//     obj2[i] = (obj2[i]||0) +1
// }

// for(let i in obj2){
//     if(!obj[i]||obj[i]<obj2[i]||0){
//         console.log(i)
//     }
    
// }












// let a = [98,7,6,54,3,2,1]

// for(let i =1;i<a.length;i++){
//     let temp =a[i]
//     let j = i-1
//     while(j>=0&&a[j]>temp){
//         console.log(a)
//         a[j+1]= a[j]
//         j--
//     }
//     console.log(j)
//     a[j+1] = temp
// }
// console.log(a)

// let arr = [5, 2, 4, 6, 1, 3];

// for(let i =1;i<arr.length;i++){
//  let temp = arr[i]
//  let j = i-1
//  while(j>=0&&arr[j]>temp){
//      arr[j+1] = arr[j]
//      j--
//  }
//  arr[j+1] = temp
//   console.log(arr)

// }


// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[min]>arr[j]){
//                 min = j
                
//             }
//         }
    
//     let temp = arr[i]
//     arr[i]=arr[min]
//     arr[min]=temp
//     }
//     return arr
// }
// let arr = [2,3,463,2,11,12,3]

// console.log(selectionSort(arr))



// function BubbleSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j = 0;j<arr.length-i-1;j++){
//             if(arr[j+1]<arr[j]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//         }
//     }
//     return arr
// }


// let arr = [5,43,32,1,121,23,8]
// console.log(BubbleSort(arr))


// function QuickSort(arr,left=0,right=arr.length-1){
//     if(right>=left){
//         let index = sorting(arr,left,right)
//         QuickSort(arr,left,index-1)
//         QuickSort(arr,index+1,right)
//     }
//     return arr
// }

// function sorting(arr,left,right){
//     let pivot = arr[right]
//     let i = left -1
//     for(let j = left;j<right;j++){
//         if(pivot>arr[j]){
//             i++
//             [arr[j],arr[i]] = [arr[i],arr[j]]
//         }
        
//     }
//     [arr[i+1],arr[right]] = [arr[right],arr[i+1]]
//     return i+1
// }

// let arr = [3,4,433,221,12,4,567,8]


// console.log(QuickSort(arr))





// function average(arr,index=arr.length-1,sum=0){
//     if(index < 0 ){
//         return sum/arr.length
//     }
//     return  average(arr,index-1,sum+arr[index])
// }
// let arr = [12,34,56,78,9]
// console.log(average(arr))



// let a = "Anamika"

// function mergeSort(a){
//     if(a.length<=1){
//         return a
//     }
//     let mid = Math.floor(a.length/2)
//     let left = a.slice(0,mid)
//     let right = a.slice(mid)
//     let leftsort = mergeSort(left)
//     let rightsort = mergeSort(right)
//     return merge(leftsort,rightsort)
// }

// function merge(left,right){
//     let b= []
//     let i= 0
//     let j =0
//     while(i<left.length&&j<right.length){
//         if(left[i]<right[j]){
//             b.push(left[i])
//             i++
//         }else{
//             b.push(right[j])
//             j++
//         }
        
//     }
//     return b.concat(left.slice(i)).concat(right.slice(j)).join('')
// }

// console.log(mergeSort(a))




// let a = "My name is Minnu"
// let c =""
// let l=""
// let s =""

// for(let i =0 ;i<=a.length;i++){
//     if(i == a.length||a[i]==" "){
//         if(l.length<c.length){
//             s=l
//             l=c
//         }else if(s.length<c.length&&s.length<l.length){
//             s=c
//         }
//         c=""
//     }
//     c += a[i]
// }

// console.log(s)
// console.log(l)


// const target ={
//     name:"Anamika",
//     age:22
// }

// const handler ={
//     get(obj,prop){
//         return obj[prop]
//     },
//     set(obj,prop,value){
//         obj[prop] = value
//         return true
//     }
// }

// let proxy = new Proxy(target,handler)
// console.log(proxy.age)
// proxy.age = 27
// console.log(proxy.age)





// let a = "aabbbcccccdddd"
// let c = ""
// let l = ""
// let s = ""

// for(let i =0;i<=a.length;i++){
//     if(a[i]!== a[i-1] ){
//         if(l.length<c.length){
//             s=l
//             l = c
//         }else if(s.length<c.length&&l.length>s.length){
//             s =c
//         }
//         c = ""
//     }
//     console.log(c)
    
//         c+=a[i]
       
    
    
    
// }

// console.log(l)
// console.log(s)





// let a = [1,2,34,5,6,3,77,5,3,11,1,5,7,9,6]
// let index = 0
// for(let i=0;i<a.length;i++){
//     if(a[i]%2 ==1 && a[i-1]%2 ==1||a[i+1]%2==1&&a[i]%2==1){
      
    
//     }else{
//         a[index] = a[i]
//         index++
//     }
// }
// a.length = index


// console.log(a)


// let a ="abc"
// let b = "123"

// let c = ""

// for(let i=0;i<a.length;i++){
//     c+=a[i]+b[i]
    
// }
// console.log(c)


// let a = "a1b2c3"
// let c = ""

// for(let i =0;i<a.length;i++){
//     if(!isNaN(a[i])){
//         for(let j=0;j<a[i];j++){
//           c += a[i-1]
//         }
//     }
    
// }
// console.log(c)



// let a = "aaabbbbccdddd"
// let count = 1
// let result = {}

   
// for(let i=0;i<a.length;i++){
//     if(a[i]!==a[i+1]){
//          result[a[i]] = count;
//       count =0
//     }
//     count++
// }

// console.log(result)



// let a =[1,2,3,1,4,5,2]

// let b = a.filter((e)=>a.indexOf(e)==a.lastIndexOf(e))
// console.log(b)


// function BinarySearch(arr,target,left=0,right=arr.length-1){
//     if(left>=right){
//         return -1
//     }

//         let mid = Math.floor((left+right)/2)
        
//         if(arr[mid]==target){
//             return mid
//         }else if(arr[mid]>target){
//             return BinarySearch(arr,target,left,mid-1)
//         }else{
//               return BinarySearch(arr,target,mid+1,right)
//         }
    
// }

// console.log(BinarySearch([1,2,3,4,6,8,9,10],8))


// let a=[4, 1, 6, 3, 7, 7]
// let max = 0
// let s =0
// for(let i=0;i<a.length;i++){
//     if(a[i]>max){
//         s= max
//         max= a[i]
//     }else  if(a[i]>s&&a[i]<max){
//         s= a[i]
//     }
// }

// console.log(s)
// console.log(max)


// function sum(...num){
//     return num.reduce((acc,cuu)=> acc+cuu)
// }

// console.log(sum(1,2,3,4,5))


// app.use((req,res,next)=>{
//     res.send("hello")
//     next()
// })

// app.get('/user/id',(req,res)=>{
//     res.paramas.a = id
    
// })

// app.router('/book')
//
// .get((req,res)=>{
//     res.send("hai")
// })


// function outer(){
//     let a = 10
//     function inner(){
//         console.log(a)
//     }
//     return inner()
// }

//  outer()


// Find the non repeating elements from an array using Higher-Order Function


// let a = [1,2,3,2,3,5,6,7,8,9,7,6]

// let b = a.filter((e)=>a.indexOf(e)==a.lastIndexOf(e))

// console.log(b)


// let c = (a,b)=>(a+b)
// console.log(c(3,4))


// let d = (...a)=>(a.reduce((acc,cuu)=>acc+cuu) )

// console.log(d(1,2,3,4,5))


// let a = [1,2,3,5,5,4,3,2,1,7]

// let b = a.reduce((acc,cuu)=>{
//     if(!acc.includes(cuu)) acc.push(cuu)
//     return acc
// },[])

// console.log(b)

// Sum of odd numbers in array using arrow


// let a = [1,2,3,4,5,6,7,]

// let b= (a)=>( a.reduce((acc,cuu)=>cuu%2==1?acc+cuu:acc))
// console.log(b(a))


// let a = [1,2,3,4,5]

// let b= (a)=>(a.reduce((acc,cuu)=>{
//     if(cuu%2==1){ 
//         return acc+cuu }
// return acc
// }))
// console.log(b(a))


// Find second highest using reduce
// let a= [1,2,34,5,67,89,11,22,32]

// let [max,acc] = a.reduce(([max,acc],cuu)=>{
//     if(max<cuu){
//         return [cuu,max]
//     }else if(acc<max && acc<cuu){
//         return [max,cuu]
        
//     }
//     return [max,acc]
// },[0,0])

// console.log(acc)


// Reverse array using temp

// let a= [1,2,34,5,67,89,11,22,32]

// for(let i=0;i<Math.floor(a.length/2);i++){
//   let  temp = a[i]
//     a[i]=a[a.length-i-1]
//     a[a.length-i-1]=temp
// }

// console.log(a)

// Array and object destructuring


// let a = {
//     name:"Anamika",
//     age:22
// }

// let {name,age} = a
// console.log(name)


// let b = ["anamika","anil","hello"]



// let [a,k,c] = b
// console.log(a)

// let a = {
//     name:"Anamika",
//     age:22
// }

// let b = {
//     name1:"minnu",
//     age1:21
// }

// console.log({...a,...b})



// - [ ]  Delete null values from object

// let b = {
//     name1:"minnu",
//     age1:null
// }
// let c = {}
// for(let i in b){
 
//     if(b[i] !==null){
//         c[i] = b[i]
//     }
// }
// console.log(c)


// class node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class bst{
//     constructor(){
//         this.root = null
//     }
//     insert(value){
//         let newnode = new node(value)
//         if(!this.root){
//             this.root = newnode
//             return
//         }
//         let current = this.root
//           while(current){
//               if(value<current.value){
//                   if(!current.left){
//                     return   current.left = newnode
//                   }
//                   current = current.left
//               }else{
//                   if(!current.right){
//                    return   current.right = newnode
//                   }
//                   current = current.right
//               }
//           }
//     }
//     secondlargest(node = this.root,parent = null){
//         if(!this.root){
//             return null
//         }
        
//         if(node.right){
//          return  this.secondlargest(node.right,node)
//         }else
//         if(node.left){
//             let current = node.left
//             while(current.right){
//                 current= current.right
//             }
//             return current.value
//         }else{
//         return parent.value
//         }
        
//     }
    
//     secondsmallest(node= this.root,parent =null){
//         if(!this.root){
//             return null
//         }
//         if(node.left){
//             return this.secondsmallest(node.left,node)
//         }else if(node.right){
//             let current = node.right
//             while(current){
//                 current = current.left
//             }
//             return current.value
//         }else{
//             return parent.value
//         }
//     }
    
//     inorder(current = this.root){
//         if(current){
          
//         this.inorder(current.left)
//        console.log(current.value)
//         this.inorder(current.right)
           
          
//         }
     
//     }
// }




// let b = new bst()
// b.insert(14)
// b.insert(15)
// b.insert(54)
// b.insert(5)
// b.insert(58)
// b.insert(55)
// b.insert(57)
// // b.inorder()
// console.log(b.secondsmallest())
// console.log(b.secondlargest())









// class graph{
//     constructor(){
//         this.a = {}
//     }
//     addvertex(v){
//         if(!this.a[v]){
//             this.a[v]=[]
//         }
//     }
//     addedge(v1,v2){
//         if(!this.a[v1]) this.addvertex(v1)
//           if(!this.a[v2]) this.addvertex(v2)
//           this.a[v1].push(v2)
//             this.a[v2].push(v1)
    
//     }
    
//     isconnected(v1,v2){
//        if(!this.a[v1]) return false
//         if(!this.a[v2]) return false
//         return this.a[v1].includes(v2)
//     }
    
//     degree(v){
//         return this.a[v].length
//     }
    
//     bfs(start){
//     if(!this.a[start]) return null
//     let set = new Set()
//     let queue = [start]
//     set.add(start)
//     while(queue.length){
//         let current = queue.shift()
//         console.log(current)
//         for(let i of this.a[current]){
//             if(!set.has(i)){
//                 set.add(i)
//                 queue.push(i)
//             }
//         }
//     }
//     }
    
//     dfs(start,visited = new Set()){
//         if(!this.a[start]) return null
//         visited.add(start)
//         console.log(start)
//         for(let i of this.a[start]){
//             if(!visited.has(i)){
//                 this.dfs(i,visited)
//             }
//         }
        
//     }
    
//     hasPath(v1,v2,set = new Set()){
//         if(!this.a[v1]) return null
//         set.add(v1)
       
//         for(let i of this.a[v1]){
        
//             if(!set.has(i)){
//                 this.hasPath(i,v2,set)
                
//             }else if(set.has(v2)){
//                 return true
                
//             }
//         }
//         return false
//     }
    
//     print(){
//         for (let vertex in this.a) {
//         console.log(vertex + ": " + this.a[vertex].join(","))
//     }
//     }
// }

// let g = new graph()
// g.addvertex("a")
// g.addvertex("b")
// g.addvertex("c")
// g.addvertex("d")
// g.addvertex("e")
// g.addedge("c","e")
// g.addedge("a","b")
// g.addedge("c","b")
// g.addedge("d","e")
// g.addedge("e","b")
// g.addedge("a","e")
// console.log(g.degree("a"))
// g.bfs("a")
// console.log(g.hasPath("a","c"))

// g.print()
// g.dfs("a")
// console.log(g.isconnected("a","e"))



// let a = [{name:"Anamika",role:"user"},{name:"Sanitta",role:"user"},{name:"Ponnu",role:"Admin"},{name:"Rose",role:"user"},{name:"Minnu",role:"Superuser"}]

//  obj ={}
// for(let i of a){
   
//     let role = i.role
//     if(obj[role]){
//         obj[role] += " ,"+i.name 
        
//     }else{
//         obj[role] = i.name 
//     }
   
// }

// console.log(obj)




// // let a = [{name:"Anamika",role:"user"},{name:"Sanitta",role:"user"},{name:"Ponnu",role:"Admin"},{name:"Rose",role:"user"},{name:"Minnu",role:"Superuser"}]

// //  obj ={}
// // for(let i of a){
   
// //     let role = i.role
// //     if(obj[role]){
// //         obj[role] += " ,"+i.name 
        
// //     }else{
// //         obj[role] = i.name 
// //     }
   
// // }

// // console.log(obj)





// // let name = "Anamika";

// // function greet() {
// //     let name = "Rose"; // shadows outer name
// //     console.log(name); // Rose
// // }

// // greet();
// // console.log(name); // Anamika






// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linked{
//     constructor(){
//         this.head= null
//     }
//     insert(value){
//         let newNode = new Node(value)
//         if(!this.head){
//         this.head = newNode
//         return 
//         }
   
//         let current = this.head
        
//         while(current.next){
//             current = current.next
            
//         }
//          current.next  = newNode
        
//     }
//     circular(){
//          if(!this.head){
//       return null
//         }
//           let current = this.head
        
//         while(current.next){
//             current = current.next
            
//         }
//          current.next  = this.head
        
//     }
    
//     print(){
//         if(!this.head){
//             return null
//         }
//         let current = this.head
//         let a =  this.head.value + " ->"
//         while(current){
//             a += current.next.value + " -> "
//             current = current.next
//             if(current.next==this.head){
                
//                  console.log(a)
//                 return a
//             }
//         }
//         a+= null
       
//     }
// }


// let b = new linked()
// b.insert(8)
// b.insert(7)
// b.insert(2)
// b.insert(1)
// b.insert(9)
// b.circular()
// b.print()



// class Bst{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binary{
//     constructor(){
//         this.root = null
//     }
//     insert(value,current = this.root){
//         let newnode = new Bst(value)
//         if(!this.root){
//             this.root = newnode
//           return 
//         }
//             if(current.value>value){
//                 if(!current.left){
//                  return   current.left = newnode
//                 }
//               return this.insert(value,current.left)
//             }else{
//                 if(!current.right){
//                 return    current.right = newnode
//                 }
//               return   this.insert(value,current.right)
//             }
//         }
        
        
//         dgree(target,node = this.root){
       
//             if(!node){
//                 return null
//             }
//              if(node.value == target){
//             let count =0
//               if(node.left){
//                   count++
//               }
//               if(node.right){
//                   count++
//               }
//               return count
              
//                 }
//                 if(node.value>target){
//                     return this.dgree(target,node.left)
//                 }else{
//                      return this.dgree(target,node.right)
//                 }
          
            
//         }
    
//         depth(target,node = this.root,count=0){
//               if(node.value ===target){
//                     return count
//                 }
                
//                 if(node.value>target){
//                 return this.depth(target,node.left,count+1)
//                 }else{
//                  return this.depth(target,node.right,count+1)
//                 }
           
//         }

//     inorder(node= this.root){
//         if(node){
//             this.inorder(node.left)
//             console.log(node.value)
//             this.inorder(node.right)
//         }
        
//     }
    
// }


// let a = new binary()
// a.insert(4)
// a.insert(7)
// a.insert(8)
// a.insert(1)
// a.inorder()
// console.log("degree of node "+a.dgree(7))
// console.log("depth of node " + a.depth(8))



// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
    
//     hash(key){
//         let hash =0
//         for(let i=0;i<key.length;i++){
//             hash = (hash +key.charCodeAt(i)*11)%this.table.length
            
//         }
//         return hash
//     }
    
//     set(key,value){
//         let index = this.hash(key)
//         console.log(index)
//         if(!this.table[index]){
//             this.table[index] =[]
//         }
//         this.table[index].push([key,value])
//     }
    
//     get(key){
//         let index = this.hash(key)
//         if(this.table[index]){
//             for(let i of this.table[index]){
//                 if(i[0]==key) return i[1]
//             }
//         }
//         return undefined
//     }
    
    
// }

// let a =new  Hashtable(7)
// a.set("age",21)
// a.set("age4",22)
// a.set("age9",24)
// console.log(a.get("age"))



// function *gen(n){
//     for(let i=n ;i>=0;i--){
//         if(i%7==0){
//             yield i
//         }
//     }
// }

// let a = gen(100)

// let h = setInterval(()=>{
//   console.log(a.next().value) 
//   if(a.next().done){
//   clearInterval(h)
//   }
    
// },1000) 




// let a = [1,2,3,4,56,7,89,33]

// let [max,sec] = a.reduce(([max,sec],cuu)=>{
//     if(cuu%2==1 && cuu>max){
//         return [cuu,max]
//     }else if(cuu%2==1 && cuu>sec  ){
//         if(max>sec){
//             return [max,cuu]
//         }
        
//     }
//     return [max,sec]
// },[0,0])

// console.log(sec)


// let sum = (...a)=>a.reduce((acc,cuu)=>acc+cuu)

// console.log(sum(1,2,3,45))





// stack

// class stack{
//     constructor(){
//         this.table = []
//     }
    
//     insert(val){
//         return this.table.push(val)
//     }
    
//     remove(){
//         if(this.table.length==0){
//             console.log("satck is empty")
//             return 
//         }
        
//         return this.table.pop()
//     }
    
//     sort(){
//         let temp =[]
//         while(this.table.length>0){
//             let a = this.table.pop()
//             while(temp.length>0 && temp[temp.length-1]>a){
//                 this.table.push(temp.pop())
//             }
//             temp.push(a)
//         }
//         while(temp.length>0){
//             this.table.unshift(temp.pop())
//         }
//     }
    
//     look(){
//         console.log(this.table)
//     }
// }


// let a = new stack()
// a.insert(7)
// a.insert(88)
// a.insert(9)
// a.insert(12)
// a.remove()
// a.sort()
// a.look()




//queue

// class q{
//     constructor(){
//         this.table = []
//     }
    
//     insert(val){
//         return this.table.push(val)
//     }
    
//     remove(){
//     if(this.table.length==0){
//         console.log("your queue is empty")
//         return
//     }
//     return this.table.shift()
//     }
    
//     look(){
//         console.log(this.table)
//     }
    
    
// }

// let s = new q()
// s.insert(5)
// s.insert(7)
// s.insert(9)
// s.insert(15)
// s.remove()
// s.look()


// function insertionSort(arr){

//     for(let j=1;j<arr.length;j++){
//         let i =j-1
//         let key = arr[j]
        
//         while(arr[i]>key&&i>=0){
//             arr[i+1]=arr[i]
//             i--
//         }
//         arr[i+1]=key
//     }
//     return arr
// }


// console.log(insertionSort([77,99,55,3,7,3,8,2]))



// let s ="Anamika"

// let k =""
// j=s.split('')
// console.log(s.length)
// for(let i=0;i<s.length;i++){
//     k += j.pop()
// }

// console.log(k)


// function Sort(arr){
//     let j =0
//     while(j<arr.length){
//     for(let i=0;i<arr.length-j-1;i++){
//         if(arr[i]>arr[i+1]){
//             [arr[i],arr[i+1]]= [arr[i+1],arr[i]]
//         }
//     }
//     j++
//     }
//     return arr
// }

// console.log(Sort([7,54,32,12,3,2,1])



// function SelectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//     let min = i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[min]>arr[j]){
//             min = j
//         }
//     }
//     [arr[min],arr[i]] = [arr[i],arr[min]]
    
//     }
//     return arr
// }


// console.log(SelectionSort([12,3,4,6,73,22,1]))



// function debouncing(cb,delay){
//     let decounced
//     return function (){
//         if(decounced) clearTimeout(decounced)
//         decounced = setTimeout(()=>{
//             cb()
//         },delay)
//     }
// }

// function hello(){
//     console.log("it is working")
// }


// let d = debouncing(hello,2000)
// d()
// d()
// d()





// function trottling(cb,delay){
//     let iswating = false
//     return function (){
//         if(!iswating){
//             cb()
//             iswating = true
//             setTimeout(()=>{
//                 iswating = false
//             },delay)
//         }
//     }
// }

// function hello(){
//     console.log("hello i am throttling")
// }

// let a = trottling(hello,2000)

// function hai(){
//     let count =0
//    let b = setInterval(()=>{
//        a()
//        count++ 
//        if(count == 10){
//            clearInterval(b)
//        }
//     },1000)
// }

// hai()




// function debouncing(cb,delay){
//     let decounced
//     return function (){
//         if(decounced) clearTimeout(decounced)
//         decounced = setTimeout(()=>{
//             cb()
//         },delay)
//     }
// }

// function hello(){
//     console.log("it is working")
// }


// let d = debouncing(hello,2000)
// d()
// d()
// d()




// function debounced(cb,delay){
//     let debounce;
//     return function (){
//         if(debounce) clearTimeout(debounce)
//         debounce = setTimeout(()=>{
//             cb()
//         },delay)
//     }
// }


// function hello(){
//     console.log("hello")
// }
// let c = debounced(hello,2000)
// c()
// c()






// function trottling(cb,delay){
//     let iswaiting = false
//     return function (){
//         if(!iswaiting){
//             cb()
//             iswaiting = true
//             setTimeout(()=>{
//                 iswaiting = false
//             },delay)
            
//         }
//     }
// }



// function hello(){
//     console.log("hai")
// }

// let v = trottling(hello,2000)



// function hai(){
//     let count =0
//   let s =  setInterval(()=>{
//         count++
//         v()
//         if(count==10){
//             clearInterval(s)
//         }
        
//     },1000)
// }

// hai()



// Remove duplicate numbers from an nested array using recursion 




// let a = [1,2,[3,1,2],[3,4,5],6,7]


// function remove(a,i=0,b=[],seen = new Set()){
//     if(i==a.length){
//         return b
//     }
//     if(Array.isArray(a[i])){
//         remove(a[i],0,b,seen)
//     }else if(!seen.has(a[i])){
//         seen.add(a[i])
//         b.push(a[i])
//     }
    
//     return remove(a,i+1,b,seen)
    
// }


// console.log(remove(a))





// class node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head = null
//     }
    
//     insert(value){
//         let newnode = new node(value)
//         if(!this.head){
//             this.head = newnode
//             return 
//         }
//         let current = this.head
//         while(current.next){
//             current = current.next
//         }
//         current.next = newnode
//     }
    
//     reverse(){
//         if(!this.head){
//             return null
//         }
//         let current = this.head
//          let prev = null
//         while(current){
//           let  temp = current.next
//             current.next = prev
//             prev = current
//             current = temp
//         }
//         this.head = prev
//     }
    
//     print(){
//           if(!this.head){
//             return null
//         }
//         let current = this.head
//         let word = ""
//         while(current){
//             word += current.value
//             current= current.next
//         }
//         return word
//     }
    
// }


// function reveseastring(a){
//     let g = new linkedlist()
//     for(let i=0;i<a.length;i++){
//         g.insert(a[i])
//     }
//     g.reverse()
//  return  g.print()

// }


// console.log(reveseastring("hello"))




// function heap(arr){
//     let n = arr.length
//     for(let i= Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i = n-1;i>=0;i--){
//         [arr[i],arr[0]] = [arr[0],arr[i]]
//         heapify(arr,i,0)
//     }
//     return arr
// }


// function heapify(arr,n,i){
//     let largest = i
//     let left = 2*i +1
//     let right = 2*i+2
//     if(left<n&& arr[left]>arr[largest]){
//         largest = left
//     }
//       if(right<n&& arr[right]>arr[largest]){
//         largest = right
//     }
//     if(i !== largest){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }

// console.log(heap([1,2,2,1,13,56,33,77]))



// class graph{
//     constructor(){
//         this.graph = []
//     }
    
//     addvertex(v){
//         if(!this.graph[v]){
//             this.graph[v] = []
//         }
//     }
    
//     addedge(v1,v2){
//         if(!this.graph[v1]){
//             this.addvertex(v1)
//         }
//          if(!this.graph[v2]){
//             this.addvertex(v2)
//         }
//         this.graph[v1].push(v2)
//         this.graph[v2].push(v1)
//     }
    
//     bfs(start){
//         if(!this.graph){
//             return null
//         }
//         let queue = [start]
//         let visited = new Set([start])
//         while(queue.length>0){
//             let node = queue.shift()
//             console.log(node)
//             for(let i of this.graph[node]){
//                 if(!visited.has(i)){
//                     visited.add(i)
//                     queue.push(i)
//                 }
//             }
//         }
//     }
    
//     dfs(node,visited = new Set()){
//         if(!this.graph){
//             return null
//         }
//         console.log(node)
//         visited.add(node)
//         for(let i of this.graph[node]){
//             if(!visited.has(i)){
//             this.dfs(i,visited)
//             }
//         }
//     }
    
// isconnected(start) {
//     let queue = [start];
//     let visited = new Set([start]);

//     while (queue.length > 0) {
//         let node = queue.shift();

//         for (let i of this.graph[node]) {
//             if (!visited.has(i)) {   // check neighbor
//                 visited.add(i);
//                 queue.push(i);
//             }
//         }
//     }

//     if (Object.keys(this.graph).length !== visited.size) {
//         console.log("it is disconnected");
//     } else {
//         console.log("it is connected");
//     }
// }

//     print(){
//         console.log(this.graph)
//     }
// }

// let j = new graph()
// j.addvertex("a")
// j.addvertex("b")
// j.addvertex("c")
// j.addvertex("d")
// j.addvertex("e")
// j.addedge("a","c")
// j.addedge("a","e")
// j.addedge("d","c")
// j.addedge("b","e")
// j.addedge("b","c")
// j.bfs("a")
// j.dfs("b")
// j.isconnected("a")


// let target = {name:"Anamika",age:22}

// let handler= {
//     get:function(obj,prop){
//         return prop in obj ?obj[prop]:"it is not found"
//     },
//     set:function(obj,prop,value){
//         if(prop == "age"&& value<0){
//             throw new Error("age cannot be negative")
//         }
//         obj[prop] = value
//         return true
//     }
// }

// let proxy = new Proxy(target,handler)

// console.log(proxy.name)

// proxy.name = "Athul"
// console.log(proxy.name)


// let obj = {
//     name:"Anamika",
//     age:23
// }

// function profile(){
//     console.log(I am ${this.name},and I am ${this.age} years old)
// }


// let a =profile.bind(obj)
// a()




// function hello(){
//     let a = 7
//     return function (){
//         console.log(a)
//     }
// }

// let b =hello()
// b()





// class node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right= null
//     }
// }


// class tree{
//     constructor(){
//         this.root = null
//     }
    
//     insert(value){
//         let newnode = new node(value)
//         if(!this.root){
//         return    this.root = newnode
    //     }
    //     let current = this.root
    //     while(true){
    //         if(value<current.value){
    //             if(!current.left){
    //               return   current.left = newnode
    //             }
    //             current = current.left
    //         }else{
    //              if(!current.right){
    //               return   current.right = newnode
    //             }
    //             current = current.right
    //         }
    //     }
    // }
    
    
    // smallest(node = this.root){
    //     if(!node) return null
    //     if(node.left==null){
    //         return node.value
    //     }
     
    //   return     this.smallest(node.left)
    // }
    
    
    // secondsmallest(node = this.root){
    //     if(!node||(!node.left&&!node.right)){
    //         return null
    //     }
    //     if(node.left&&(!node.left.left&&node.left.right)){
    //         return this.smallest(node.left.right)
    //     }
        
    //     if(node.left&&(!node.left.left&&!node.left.right)){
    //         return node.left.value
    //     }
        
    // }
//     secondsmallest(node= this.root,p=null){
//         if(!node||(!node.left&&!node.right)){
//             return null
//         }
        
//         if(!node.left){
//          if(node.right){
//              return this.smallest(node.right)
//          }
//          if(p){
//              return p.value
//          }
//         }
//         return this.secondsmallest(node.left,node)
//     }
    
    
//     levelodertravesal(node= this.root){
//         if(!node){
//             return null
//         }
//         let queue = [this.root]
//         while(queue.length>0){
//             let current =queue.shift()
//             console.log(current.value)
//             if(current.left) queue.push(current.left)
//             if(current.right) queue.push(current.right)
//         }
//     }
    
//     inoder(node = this.root){
    
//         if(node){
//             this.inoder(node.left)
//             console.log(node.value)
//             this.inoder(node.right)
//         }
//     }
// }

// let t = new tree()
// t.insert(8)
// t.insert(5)
// t.insert(77)
// t.insert(12)
// t.insert(16)
// t.insert(17)
// t.insert(7)
// t.insert(15)
// t.insert(73)
// console.log(t.smallest())
// console.log(t.secondsmallest())
// t.inoder()
// t.levelodertravesal()



// function binarySearch(arr,target){
//     let left = 0
//     let right = arr.length
    
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
        
//         if(arr[mid]== target){
//             return mid
//         }else if(arr[mid]>target){
//             right = mid-1
//         }else{
//             left = mid +1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([1,2,4,5,6,7,8],8))



// function BinarySearch(arr,t,i=0,j=arr.length){
//     let mid = Math.floor((i+j)/2)
//     if(i>=j){
//         return -1
//     }
    
//     if(arr[mid]==t){
//         return mid
//     }else if(arr[mid]>t){
//   return     BinarySearch(arr,t,i,mid-1)
//     }else{
//           return BinarySearch(arr,t,mid+1,j)

//     }
// }

// console.log(BinarySearch([1,3,4,5,6,7],7))





// console.log(a)

// let a = 10
// {
//     // var  a = 20
// }
// [
//   [
//     {
//       name: 'John',
//       age: 25,
//       averageAge: '29.67',
//       ageDiff: 'Lower than average by 4.67'
//     },
//     {
//       name: 'Jane',
//       age: 30,
//       averageAge: '29.67',
//       ageDiff: 'Higher than average by 0.33'
//     },
//     {
//       name: 'Bob',
//       age: 35,
//       averageAge: '29.67',
//       ageDiff: 'Higher than average by 5.33'
//     }
//   ],
//   [
//     {
//       name: 'Alice',
//       age: 20,
//       averageAge: '29.67',
//       ageDiff: 'Lower than average by 9.67'
//     },
//     {
//       name: 'Mike',
//       age: 40,
//       averageAge: '29.67',
//       ageDiff: 'Higher than average by 10.33'
//     },
//     {
//       name: 'Emma',
//       age: 28,
//       averageAge: '29.67',
//       ageDiff: 'Lower than average by 1.67'
//     }
//   ]
// ]

// let n= "345"
// let sum = 0
// while(n>0){
//     sum += n%10
//     n = n/10|0
// }

// console.log(sum)


// console.log("4">"3")
// console.log( 4 > "3")

// let a = true

// for(let i =100;i>=0;i--){
//     if(i%2==0&&a){
//           console.log(i)
//           a= false
          
//     }else
//     if(i%2==0&&!a){
//           a= true
//     }
  
// }



// let a= ["apple","come","coming","orange"]
// let pre = "com"


// for(let i =0;i<a.length;i++){
//     if(a[i].includes(pre)){
//         console.log(a[i])
//     }
// }




// let {exec} = require("child_process")



// exec('ls',(error,stdout,stderr)=>{
//     if(error){
//         console.log(error)
//     }
//     if(stderr){
//         console.error(stderr)
//     }

//     console.log(stdout)
// })


// let {execFile} = require("child_process")


// execFile("node",["-v"],(error,stdout)=>{
//     if(error) throw error
//     console.log(stdout)
// })


// let {spawn} = require("child_process")

// let ls = spawn('ls',['-lh','.'])
// ls.stdout.on('data',data=>console.log(data.toString()))
// ls.stderr.on('data',data=>console.error(data.toString()))
// ls.on('close',code=>console.log("closed........",code))





// function trottling(fn,delay){
//     let iswaiting = false
//     return function(){
//         if(!iswaiting){
//             fn()
//             iswaiting = true
//             setTimeout(()=>(iswaiting=false),delay)
//         }
//     }
// }


// function hai(){
//     console.log("haiiiiii")
// }


// let t = trottling(hai,2000)

// let count = 0
// interval = setInterval(()=>{
//     t()
//     count++
//     if(count==10){
//         clearInterval(interval)
//     }
    
// },1000)




// function debounce(fn,delay){
    //     let timer;
    //     return function(){
    //         clearInterval(timer)
    //         timer = setTimeout(()=>{
    //             fn()
    //         },delay)
    //     }
    // }
    
    
    // function hello(){
    //     console.log("haiiiiiiiii")
    // }
    
    
    // let den = debounce(hello,2000)
    
    // let count =0
    
    // let interval = setInterval(()=>{
    //     den()
    //     count++
    //     if(count==10){
    //         clearInterval(interval)
    //     }
    // },1000)







    // let os = require('os')
    // let http = require('http')
    // let cluster = require('cluster')


    // if(cluster.isPrimary){
    //     let length = os.cpus().length
    //   console.log(length)
    //     for(let i = 0;i<length;i++){
    //         cluster.fork()
    //     }

    //     cluster.on('exit',(worker)=>{
    //         cluster.fork()
    //     })


    // }else{


    //     http.createServer((req,res)=>{
    //         res.end("hellllllo")
    //     }).listen(3000)
    //     console.log("haiiii")


    // }



    // function quicksort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let pivot= arr[arr.length-1]
//     let left = []
//     let right =[]
//     for(let i=0;i<arr.length-1;i++){
//         if(pivot>arr[i]){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }

// console.log(quicksort([7,4,3,2,19,77,43]))



// function bubblesort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
//             }
//         }
//     }
//     return arr
// }


// console.log(bubblesort([85,3,2,55,1,8,4]))





// function insertionsort(arr){
//     for(let i =1;i<arr.length;i++){
//         let j = i-1
//         let key= arr[i]
//         while(j>=0&&key<arr[j]){
//             arr[j+1]=arr[j]
//             j--
//         }
//       arr[j+1] = key
//     }
//     return arr
// }


// console.log(insertionsort([8,7,5,4,3,1]))




// function selectionsort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min= j
//             }
            
//         }
//         [arr[min],arr[i]] = [arr[i],arr[min]]
//     }
//     return arr
// }

// console.log(selectionsort([7,4,3,2,1]))



// function mergesort(arr){
//     if(arr.length<=1){
//         return arr
//     }
    
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergesort(left),mergesort(right))
// }

// function merge(left,right){
//     let a= []
//     let i=0
//     let j = 0
//     while(i<left.length&&j<right.length){
//         if(left[i]<right[j]){
//             a.push(left[i])
//             i++
//         }else{
//             a.push(right[j])
//             j++
//         }
//     }
//     return a.concat(left.slice(i)).concat(right.slice(j))
// }

// console.log(mergesort([8,6,5,4,3,2,1]))