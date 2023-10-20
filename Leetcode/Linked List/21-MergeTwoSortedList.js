/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    /*
    steps:
    - create a dummy node
    - create a pointer and point the dummy node
    - iterate through list1 and list2 until list1 or list2 has value
            - if list1 <= list2 point to list1 and point next to list2 and move list1 to next node in list2
            - else point to list2 and point next to list1 and move list2 to next node of list2
    - else (if list1 or list2 has null) then merge the remaining of other list which has value

    Edge cases:
    - if list1 and list2 is not equal
    */

    let dummy = new ListNode();
    let pointer = dummy;

    while(list1 && list2) {
        if(list1.val<=list2.val) {
            pointer.next = list1
            pointer = list1;
            list1 = list1.next;
        } else {
            pointer.next = list2;
            pointer = list2;
            list2 = list2.next;
        }
    }

    if(!list1) pointer.next = list2;
    if(!list2) pointer.next = list1;
    return dummy.next;
};