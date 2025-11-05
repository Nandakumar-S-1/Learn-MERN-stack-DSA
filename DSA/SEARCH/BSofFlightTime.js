
const flights = ['06:30', '08:15', '09:00', '10:45', '13:20', '15:50', '18:10'];

function BS(arr,target){
    let left=0
    let right=arr.length-1
    let res=null
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]===target){
            return arr[mid]
        }else if(arr[mid]<target){
            left=mid+1
        }else{
            res=arr[mid]
            right=mid-1
        }
    }
    if(res===null){
        return 'no flights available'
    }
return res
}

console.log(BS(flights,'19:21'));


// 3 cases are 
// if time is there return it
// if not return the next time
// at the end if the time is not there till the end thus nothing left after that return string 
