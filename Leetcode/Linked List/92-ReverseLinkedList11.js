/* Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
*/

var reverseBetween = function(head, left, right) {
    /*
    steps:
    - create a dummy node to represents previous pointer
    - create a variable to represents current pointer and assign head
    - move the current pointer and the previous pointer until it meets the left
    - now substract left from the right and get the no of iteration 
    - starts the iteration
        - then create temporary variable and assign next of current pointer
        - create a variable to represents previous node and assign null
        - then cp will move to temp
        - the pn will move to cp
    - after completing the iteration join the linkedlist
        - pp will point to the pn
        - next to the pp will point to the cp
    finally return the head of the linkedlist(---------------dummy.next-----------------------)
    */
    let dummy = new ListNode(0, head);
    let prevPoint = dummy;
    let curr = head;

    for(let i=0; i<left-1; i++) {
        curr = curr.next;
        prevPoint = prevPoint.next;
    }
    let prevNode = null;
    for(let i=0; i<right-left+1; i++) {
        let temp = curr.next;
        curr.next = prevNode;
        prevNode = curr;
        curr = temp;  
    }
    prevPoint.next.next = curr;
    prevPoint.next = prevNode;

    return dummy.next;
};