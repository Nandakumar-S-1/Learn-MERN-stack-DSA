class Heap{
    constructor(){
        this.heap=[]
    }
    insert(val){
        this.heap.push(val)
        this.bubbleUp(this.heap.length-1)
    }
    bubbleUp(index){
        while(index>0){
            let parent=Math.floor((index-1)/2)
            if(this.heap[parent]>this.heap[index]){
                break
            }
            [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]]
        }
    }
    deleteRoot(){
        if(this.heap.length==0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let root=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapify(0)
        return root
    }
    heapify(index){
        while(index>0){
            let largest=index
            let left=2*index+1
            let right=2*index+2
            if(left<this.heap.length && this.heap[largest]<this.heap[left]){
                largest=left
            }
            if(right<this.heap.length && this.heap[largest]<this.heap[right]){
                largest=right
            }
            if(largest==index){
                return
            }
            this.swap(largest,index)
            index=largest
        }
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    print(){
        console.log(this.heap);
        
    }
}

let heap = new Heap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(100);
heap.insert(1);
heap.insert(40);

console.log("Heap after insertions:");
heap.print();