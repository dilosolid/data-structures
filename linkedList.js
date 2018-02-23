
function LinkedList(){
    this.head = null;
    this.tail = null;    
}

function Node(value, prev, next){
    this.value = value;
    this.next  = next;
    this.prev  = prev;
}

LinkedList.prototype.addToHead = function(value) {    
    if(this.head && this.tail){
        let lastOne = this.head;
        this.head = new Node(value, null, this.head);    
        lastOne.prev = this.head;
    }    
    else {                
        let node = new Node(value, null, null);
        this.head = node;
        this.tail = node;
    }
};

LinkedList.prototype.addToTail = function(value) {
    if(this.head && this.tail){
        let lastOne = this.tail;
        this.tail = new Node(value, this.tail, null);    
        lastOne.next = this.tail;
    }
    else {        
        let node = new Node(value, null, null);
        this.head = node;
        this.tail = node;
    }            
};

LinkedList.prototype.removeHead = function(){
    if(this.head){
        let currentValue = this.head.value;
        
        if(this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        else{
            this.head = null;
            this.tail = null;
        }
        
        
        return currentValue;
    }
    else 
        return null;
};

LinkedList.prototype.removeTail = function(){
    if(this.tail){
        let currentValue = this.tail.value;
        
        if(this.tail.prev){
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        else{
            this.tail = null;
            this.head = null;
        }

        
        return currentValue;
    }
    else
        return null;
};

LinkedList.prototype.findValue = function(value){    
    var currentItem = this.head;
    
    while(true) {
        if (currentItem.value == value) 
            return true        
        else if (!currentItem.next) 
            return false;         

        currentItem = currentItem.next        
    }
};

const linkedListObj = new LinkedList();
//30 20 10 100 110 120

linkedListObj.addToHead(10);
linkedListObj.addToHead(20);
linkedListObj.addToHead(30);
linkedListObj.addToTail(100);
linkedListObj.addToTail(110); 
linkedListObj.addToTail(120);

console.log(linkedListObj.findValue(200));


console.log(linkedListObj.removeHead());
console.log(linkedListObj.removeHead());
console.log(linkedListObj.removeTail());
console.log(linkedListObj.removeTail());
console.log(linkedListObj.removeTail());
console.log(linkedListObj.removeTail());
console.log(linkedListObj.removeTail());
console.log(linkedListObj.removeTail());
console.log(linkedListObj.removeTail());

linkedListObj.addToTail(300);
linkedListObj.addToHead(50);



console.log(linkedListObj);


