class LinkedList {
    constructor (nodeClass) {
        this.size = 0
        this.nodeClass = nodeClass
        this.list = []
    }
}

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}