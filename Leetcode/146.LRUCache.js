/* Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
*/

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.length = 0;
    }

    push(key, val) {
        const newNode = new Node(key, val);
        // if it's empty
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }

    remove(node) {
        //if it has one element in linkedlist
        if(!node.next && !node.prev) {
            this.head = null;
            this.tail = null;
        } else if(!node.next) { // if node is a tail node
            this.tail = node.prev;
            this.tail.next = null;
        } else if(!node.prev) { // if node is a head node
            this.head = node.next;
            this.head.prev = null;
        } else { // if node is in somewhere in between
            const prevItem = node.prev;
            const nextItem = node.next;
            prevItem.next = nextItem;
            nextItem.prev = prevItem;
        }
        this.length--;
    }
}

class LRUCache {
    constructor(capacity) {
        this.LL = new DoublyLinkedList();
        this.obj = {};
        this.capacity = capacity;
    }
    get(key) {
        if(!this.obj[key]) return -1
        const value = this.obj[key].val;
        // remove from the linkedlist
        this.LL.remove(this.obj[key]);
        // add again to the linkedlist
        this.obj[key] = this.LL.push(key, value);
        return value;
    }
    put(key, value) {
        //if key is already there then remove
        if(this.obj[key]) this.LL.remove(this.obj[key]);
        // else push 
        this.obj[key] = this.LL.push(key, value);

        // check the length of the linkedlist with the capacity
        if(this.LL.length > this.capacity) {
            // delete the head
            const headNode = this.LL.head.key;
            // remove from obj
            delete this.obj[headNode];
            // remove from linkedlist
            this.LL.remove(this.LL.head);
        }
    }
}