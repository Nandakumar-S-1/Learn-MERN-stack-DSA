function twoSum(nums, target) {
    let map=new Map()
    for(let i=0;i<nums.length;i++){
        let rem=target-nums[i]
        if(map.has(rem)){
            return [map.get(rem),i]
        }
        map.set(nums[i],i)
    }
    return []
}
console.log(twoSum([1,2,3,4,5,6,7,8],30))