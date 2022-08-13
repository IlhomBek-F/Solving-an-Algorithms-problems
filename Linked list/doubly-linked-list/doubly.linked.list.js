class Node {
    constructor(value){
        this.previuos = null;
        this.value = value;
        this.next = null;
    }
}

class DoubleList {
    constructor(value){
        this.head = {
            previuos: null,
            value: value,
            next: null,
        }

        this.length = 1;
        this.tail = this.head;
    }

    printAllValue() {
        const arr = [];
        let currentList = this.head;

        while(currentList){
            arr.push(currentList.value);
            currentList = currentList.next
        }

        return this;
    }

    insertLast(value) {
        let newNode = new Node(value);

        this.tail = newNode;
        newNode.previuos = this.tail;
        this.tail = newNode;

        this.length++;
        this.printAllValue();
    }

    insertFisrt(value){
        let newNode = new Node(value);

        newNode.next = this.head;
        this.head.previuos = newNode;
        this.head = newNode;

        this.length++;
        this.printAllValue();
    }

    insertAt(index, value){
        if(!Number.isInteger(index) || index < 0 || index > this.length + 1){
            console.log(`Invalid index. Current length is ${this.length}.`);
            return this;
        }

        if(index === 0){
          this.insertFisrt(value);
          return this;
        }

        if(index === this.length){
            this.insertLast(value);
            return this;
        }

        let newNode = new Node(value);

        let previuosNode = this.head;

        for(let i = 0; i < index - 1; i++){
            previuosNode = previuosNode.next;
        }

        let nextNode = previuosNode.next;
        newNode.next = nextNode;

        previuosNode.next = newNode;
        newNode.previuos = previuosNode;
        nextNode.previuos = newNode;

        this.length++;
        this.printAllValue();
    }

    removeAt(index){
      
        if(index === 0){
            this.head = this.head.next;
            this.head.previuos = null;

            this.length--;
            this.printAllValue();
        }

        if(index === this.length - 1){
            this.tail = this.tail.previuos;
            this.tail.next = null;

            this.length--;
            this.printAllValue();
            return this;
        }

        let previuosNode = this.head;

        for(let i = 0; i < index - 1; i++){
            previuosNode = previuosNode.next;
        }

        let deletNode = previuosNode.next;
        let nextNode = deletNode.next;

        previuosNode.next = nextNode;
        nextNode.previuos = previuosNode;

        this.length--;
        this.printAllValue();
        
        return this;
    }
}

let list = new DoubleList(1);
list.insertFisrt(2);
list.insertFisrt(3);
list.insertAt(2, 0);

console.log(list.printAllValue())