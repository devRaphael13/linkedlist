class LinkedList {
    constructor(nodeClass) {
        this.size = 0;
        this.nodeClass = nodeClass;
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = this.nodeClass(value);
        this.size++;
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
    }

    prepend(value) {
        const node = this.nodeClass(value);
        this.size++;
        if (this.head) {
            this.head.next = node;
        }
        this.head = node;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        let curr = this.head;
        let count = 0;

        while (curr) {
            if (count === index) return curr;
            curr = curr.next;
            count++;
        }
        return null;
    }

    insertAt(value, index) {
        if (index >= this.size - 1) return this.append(value);
        else if (index <= 0) return this.prepend(value);
        else {
            let curr = this.head
            let nxt = curr.next
            let count = 0

            while (curr) {
                if (count === index) {
                    const node = this.nodeClass(value)
                    curr.next = node
                    node.next = nxt
                    return
                }
                curr = nxt
                nxt = nxt.next
            }
        }
    }

    removeAt(index) {
        let curr = this.head
        let nxt = curr.next
        let prev = null
        let count = 0

        if (index <= 0) {
            curr.next = null
            this.head = nxt
            return
        }

        while (curr) {
            if (count === index) {
                curr.next = null
                prev.next = nxt

                if (count >= this.size) {
                    if (nxt) {
                        this.tail = nxt
                    } else {
                        this.tail = prev
                    }
                }
                return
            }

            prev = curr
            curr = nxt
            nxt = nxt.next
        }

    }

    pop() {
        let curr = this.head;
        while (curr.next !== this.tail) {
            curr = curr.next;
        }
        curr.next = null;
        this.tail = curr;
    }

    contains(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) return curr;
            curr = curr.next;
        }
        return null;
    }

    find(value) {
        let curr = this.head;
        let count = 0;

        while (curr) {
            if (count === value) return curr;
            curr = curr.next;
            count++;
        }
        return null;
    }

    toString() {
        let str = "";
        let curr = this.head;

        while (curr) {
            str = str.concat(`( ${curr.value} ) -> `);
            curr = curr.next;
        }
        return str.concat("null");
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
