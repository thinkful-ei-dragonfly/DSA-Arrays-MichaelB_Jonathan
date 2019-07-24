const mem   = require('./memory')
const memory = new mem()

class Array{
  constructor(){
    this.length = 0
    this.capacity = 0
    this.ptr = memory.allocate(this.length)

  }

  _resize(size){
    const oldPtr = this.ptr
    this.ptr = memory.allocate(size)
    if(this.ptr === null ){
      throw new Error('Out of memory')
    }
    memory.copy(this.ptr, oldPtr, this.length)
    memory.free(oldPtr)
    this.capacity = size
  }

  push(value){
    if(this.length >= this.capacity){
      this._resize((this.length + 1)* Array.SIZE_RATIO) 
    
    }
    memory.set(this.ptr + this.length, value)
    this.length++
  }

  pop(){
    if(this.length === 0){
      throw new Error('Index Error')
    }
    const value = memory.get(this.ptr + this.length -1)
    this.length--
    return value
  }
}
function main(){
Array.SIZE_RATIO = 3

let arr = new Array()

arr.push(3)

arr.push(5)
 
arr.push(15)

arr.push(19)

arr.push(45)

arr.push(10)


arr.pop()

arr.pop()

arr.pop()

console.log(arr)
}

main()


