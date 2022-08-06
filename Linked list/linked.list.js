
class LinkedList {
    constructor(){
        this.nodes = [];
    }

    get size() {
       return this.nodes.length
    }

    get first() {
        this.size ? this.nodes[0] : null;
    }

    get last() {
        this.size ? this.nodes[this.size -1] : null;
    }

    insertAt(index, value) {
         let previuosNode = this.nodes[index - 1];
         let nextNode = this.nodes[index];
         let newNode = {value, next: nextNode};

         if(previuosNode) previuosNode.next = newNode;
         this.nodes.splice(index, 0, newNode);
    }

    insertFirst(value) {
        this.insertAt(0, value)
    }

    insertLast(value){
        this.insertLast(this.size, value)
    }

    getAt(index){
        return this.nodes[index]
    }

    deleteAt(index){
        let previousNode = this.nodes[index - 1];
        let nextNode = this.nodes[index + 1];
        if(previousNode) previousNode.next = nextNode;
        this.nodes.splice(index, 1)
    }

    clear() {
        this.nodes = []
    }

    // for iteraing
    
    [Symbol.iterator]() {
      return this.nodes;
    }
}

let list = new LinkedList();

list.insertFirst({user: 'John'});   // ['John']
list.insertFirst({user: 'Jack'});   // ['Jack', 'John']
list.insertFirst({user: 'Susan'});  // ['Susan', 'Jack', 'John']
list.insertAt(1, {user: 'Elon'});   // ['Susan' 'Elon' , 'Jack' , 'John']

list.size // 4

list.getAt(2) // Jack

list.deleteAt(2); // ['Susan', 'Elon' , 'John'];

list.clear(); // [];

const arrUser = list.nodes.map(e => e.value.user) // ['Susan', 'Elon', 'Jack', 'John']
