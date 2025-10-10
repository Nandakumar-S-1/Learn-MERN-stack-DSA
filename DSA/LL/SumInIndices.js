    // sumOfInd(){
    //     if(this.isEmpty()){
    //         return 0
    //     }else{
    //         let curr=this.head
    //         let ind=1
    //         let sum=0
    //         let power=1
    //         while(curr){
    //             if(ind===power){
    //                 sum+=curr.val
    //                 power*=2
    //             }
    //             ind++
    //             curr=curr.next
    //         }
    //         return sum
    //     }
    // }

    function sumOfPowerIndexNodes(head) {
    if (!head) {
        return 0
    }

    let curr = head
    let ind = 1
    let power = 1
    let sum = 0

    while (curr) {
        if (ind === power) {
            sum += curr.val
            power *= 2
        }
        ind++
        curr = curr.next
    }
    return sum
}
