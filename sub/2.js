const Rand = require('./randomNum');

class Node{
    constructor(value){
        this.value = value;
        this.left = this.right = null;
    }
}

class BTree{
    constructor(){
        this.origin = null;
        this.left = this.right = null;
    }

    add(value){
        if(this.origin == null){
            this.origin = new Node(value);
        }
        else{
            var current = this.origin;
            var previous;
            while(current){
                if(current.value > value){
                    if(current.left==null){
                        current.left = new Node(value);
                        break;
                        
                    }
                    else{
                        current = current.left;
                    }
                }
                else{
                    if(current.right==null){
                        current.right = new Node(value);
                        break;
                    }
                    else{
                        current = current.right;
                    }
                }     

            }
            
            
        }
    }

    inOrder(node){
        if(node !== null){
            this.print(node.left);
            console.log(node.value);
            this.print(node.right);
        }
    }
}

var tree = new BTree();

for(var i = 0 ; i < 10 ; i++){
    tree.add(Rand.randomInt(100));
}

tree.inOrder(tree.origin);

