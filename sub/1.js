class Node{
    constructor(value, next){

        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    
    constructor(){
        this.origin = null;
    }

    add(value){
        var current = this.origin;
        if (this.origin == null){
            this.origin = new Node(value);
        }
        else{
            while(current.next){
                current = current.next;
            }
            current.next = new Node(value);
        }
    }

    print(){
        var current = this.origin;
        while(current){
            console.log(current.value);
            current = current.next;
        }
        
    }

}

var list = new LinkedList()

var randomInt = function (max) {
    return Math.floor( Math.random() * Math.floor(max) )
};

for(var i = 0;i < 10; i++){
    list.add(i);
}

list.print();
