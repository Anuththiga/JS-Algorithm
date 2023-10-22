/* You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 */

var reorderList = function(head) {
    /*
    steps:
    - split the list into two
    - reverse the sencond list
    - merge the two list
    */
   let slow = head;
   let fast = head;
   while(fast.next && fast.next.next) {
       slow = slow.next;
       fast = fast.next.next;
   }
   
   // break the list
   let curr = slow.next;
   slow.next = null;

   //reverse
   let prev = null;
   while(curr) {
       let temp = curr.next;
       curr.next = prev;
       prev = curr;
       curr = temp;
   }

   //merge
   let h1 = head;
   let h2 = prev;

   while(h2) {
       let temp = h1.next;
       h1.next = h2;
       h1 = h2;
       h2 = temp;
       temp = h1.next;
   }
   return h1;
};