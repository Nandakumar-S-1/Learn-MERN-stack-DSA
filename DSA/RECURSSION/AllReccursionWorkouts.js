//Factorial of a Number
function Factorial(n){
    if(n===0){
        return 1
    }
    return Factorial(n-1)*n
}
console.log(Factorial(5))



//Fibonacci Series
 function Fibonacci(i,res=[],fst=0,sec=1){
     if(i===0){
         return res
     }
     res.push(fst)
    return Fibonacci(i-1,res,sec,fst+sec)
 }
 console.log(Fibonacci(5))
 


 //Sum of Digits 
function SumOfDigit(n,i=0){
    let str=n.toString()

    if(i==str.length){
        return 0
    }
    let curr=parseInt(str[i])
    let sum=SumOfDigit(n,i+1)
    return curr+sum
}
console.log(SumOfDigit(102))
 


//  Power Function
function Power(num,pow){
    if(pow===0){
        return 1
    }
    return Power(num,pow-1)*num
}
console.log(Power(5,2))



//Reverse a String
function ReverseStr(str,rev='',index=str.length-1){
    if(index<0){
        return rev
    }
    rev+=str[index]
    return ReverseStr(str,rev,index-1)
}
console.log(ReverseStr('nivin'))



// Palindrome String Check
function Palindrome(str){
    if(str.length<1){
        return true
    }
    if(str[0]!==str[str.length-1]){
        return false
    }
    return Palindrome(str.slice(1,-1))
}
console.log(Palindrome('nivin'))



// Count Digits
function CountDigits(n,i=0){
    let str=n.toString()
    if(i==str.length){
        return 0
    }
    return CountDigits(n,i+1)+1
}
console.log(CountDigits(533))


// Sum of Array Elements
function Sum(arr,ind=0){
    if(ind===arr.length){
        return 0
    }
    return Sum(arr,ind+1)+arr[ind]
}
console.log(Sum([1,2,3,4,5]))


// Find Minimum in Array
function Minimum(arr,min=Infinity,ind=0){
    if(ind===arr.length){
        return min
    }
    if(arr[ind]<min){
        min=arr[ind]
    }
    return Minimum(arr,min,ind+1)
}
console.log(Minimum([4,6,5,3,8]))


// Print Numbers from 1 to N
function Print(n,ind=1){
    if(ind===n){
        return n
    }
    console.log(ind)
    return Print(n,ind+1)
}
console.log(Print(8))

 
// Flatten Nested Array
function Flat(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res=res.concat(Flat(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}
console.log(Flat([1,2,3,[4,5],6,[7,8,[9]],10]))


// Find Length of String/Array
function Length(arr,i=0){
    if(i===arr.length){
        return 0
    }
    return Length(arr,i+1)+1
}
console.log(Length([1,2,3,4,5]))


// Count Occurrences of an Element
function Count(arr,num,i=0){
    let count=0
    if(i===arr.length){
        return 0
    }
    if(num==arr[i]){
        count++
    }
    return Count(arr,num,i+1)+count
}
console.log(Count([1,2,3,4,2,3,6,7,2,3,2],2))


// Sum of Even Numbers in Array
function EvenSum(arr,i=0){
    if(i===arr.length){
        return 0
    }
    let sum=0
    if(arr[i]%2===0){
        sum+=arr[i]
    }
    return EvenSum(arr,i+1)+sum
}
console.log(EvenSum([1,2,3,4,5,2,3]))


// Check Sorted Array
function Sorted(arr,i=0){
    if(i>=arr.length-1){
        return true
    }
    if(arr[i]>arr[i+1]){
        return false
    }
    return Sorted(arr,i+1)
}
console.log(Sorted([1,2,3,4,5,6]))


// Binary Search
function BS(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,left,right){
    if(left>right){
        return -1
    }
    let mid=Math.floor((left+right)/2)
    if(target===arr[mid]){
        return mid
    }else if(target<arr[mid]){
        return search(arr,target,left,right-1)
    }else{
        return search(arr,target,left+1,right)
    }
}

console.log(BS([1,2,3,4,5,6,7,8],6))


// Find GCD of Two Numbers
function GCD(a,b){
    if(b==0){
        return a
    }
    return GCD(b,a%b)
}
console.log(GCD(12,7))


// Find Index of Target
function Target(arr,target,i=0){
    if(i==arr.length){
        return -1
    }
    if(arr[i]===target){
        return i
    }
    return Target(arr,target,i+1)
}
console.log(Target([1,3,5,2,6,4,6],4))


// Capitalize Words
function Capitalize(arr,res=[],ind=0){
     if(arr.length===ind){
         return  res
     }
     res.push(arr[ind].toUpperCase())
     return Capitalize(arr,res,ind+1)
}
console.log(Capitalize(['a','bc','def']))