/* Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

*/
var reverseList = function(head) {
    /*
    steps:
    - create a variable to represents previous pointer and assign null
    - create a variable to represents current pointer and assign head value
    - create a while loop to iterate through the linked list
    - create a temporary variable which holds the NEXT node of current pointer in every iteration
    - then pp will move to cp
    - then cp will move to temporary variable

    Edge cases:
    - empty linked list or the length of the linked list is 1 return the linked list

    */

    if(head == null || head.next == null) return head;
    let prev = null;
    let curr = head;
    
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};
