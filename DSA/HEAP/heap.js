class Heap{
    constructor(){
        this.heap=[]
    }
    insert(val){
        this.heap.push(val)
        this.bubbleUp(this.heap.length-1)
    }
    bubbleUp(i){
        while(i>0){
            let parent = Math.floor((i-1)/2)
            if(this.heap[parent]>this.heap[i]){
                break
            }
            [this.heap[parent],this.parent[i]]=[this.heap[i],this.heap[parent]]
        }
    }
}