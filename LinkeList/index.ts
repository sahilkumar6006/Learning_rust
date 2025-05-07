class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number) {
        this.val = (val === undefined ? 0 : val);

    }
}