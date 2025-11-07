// let funct = (arr,tar)=>{
//     for(let char of arr){
//         if(char.includes(tar)){
//             return true
//         }
//     }
//     return false
// }
// console.log(funct([[1,2],[1,3],[4,3]],1));






let array =[[1,2,4],[5,7,9],[12,34,45]]
let target = 1

function ExistMatrix(array,target){
    if(array.length==0)return false
    let rows=array.length
    let cols=array[0].length
    
    let row=0
    let col=cols-1
    
    while(row<rows && col>=0){
        if(array[row][col]===target){
            return true
        }else if(array[row][col]>target){
            col--
        }else{
            row++
        }
    }
    return false
}
console.log(ExistMatrix(array,target))