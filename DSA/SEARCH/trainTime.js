// Binary search for nearest train time
const trains = ['05:00', '07:30', '09:45', '12:00', '14:30', '17:00', '20:15'];
// Expected Output:
// findTrain(trains, '09:45'); // "09:45"
// findTrain(trains, '11:00'); // "12:00"
// findTrain(trains, '21:00'); // "No trains available"

function findTrain(trains, targetTime){
    let left=0
    let right=trains.length-1
    let res=null

    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(targetTime===trains[mid]){
            return trains[mid]
        }else if(trains[mid]<targetTime){
            left++
        }else{
            res=trains[mid]
            right--
        }
    }
    return res
}

console.log(findTrain(trains, '20:19'));


