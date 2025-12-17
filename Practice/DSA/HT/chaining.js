class Ht{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[]
        }
        for(let pair of this.table[index]){
            if(pair[0]===key){
                pair[1]=value
                return
            }
        }
        this.table[index].push([key,value])
    }
    get(key){
        let index=this.hash(key)
        if(this.table[index]){
            for(let pair of this.table[index]){
                if(pair[0]===key){
                    return pair[1]
                }
            }
        }
    }
    remove(key){
        let index=this.hash(key)
        if(this.table[index]){
            this.table[index]=this.table[index].filter(pair=>pair[0]!==key)
            if(this.table[index].length){
                this.table[index]=undefined
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}


let table = new Ht(10)
table.set('name','aswathy')
table.set('mane','ashika')
table.set('age',22)
table.set('amen','nandu')

table.display()

console.log(table.get('mane'))
table.remove('age')

table.display()
