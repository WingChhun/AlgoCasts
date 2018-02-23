// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {

    let slow = list.getFirst();
    let fast = list.getFirst();
    let i = 0; // counter initial

    //move fast by n spaces  after advance both once
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    while (fast.next) {

        slow = slow.next;
        fast = fast.next;
    }
    //Because fast is now the last node
    //slow is n spaces from the end
    return slow;

}

module.exports = fromLast;