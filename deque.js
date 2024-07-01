//deque ou fila dupla - usado comumente em gerencimaneto de ações, fazer e desfazer. Ou, na vida real uma fila de cinema. Segue tanto princípios de FIFO e LIFO.

class deque {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    addFront(item) {
        if (this.isEmpty()) {
            this.addBack(item);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = item;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.items[0] = item;
        }
    }

    addBack(item) {
        this.items[this.count] = item;
        this.count++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        if (this.isEmpty()) {
            this.lowestCount = 0;
            this.count = 0;
        }
        return item;
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const item = this.items[this.count];
        delete this.items[this.count];
        if (this.isEmpty()) {
            this.lowestCount = 0;
            this.count = 0;
        }
        return item;
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.lowestCount === this.count;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
    }

    print() {
        if (this.isEmpty()) {
            return 'Deque is empty';
        }
        let result = '';
        for (let i = this.lowestCount; i < this.count; i++) {
            result += `${this.items[i]} `;
        }
        return result.trim();
    }
}

const deques = new deque()
deques.addFront("Gabriel")
deques.addFront("Gabrielz")
deques.addFront("Gabriels")

deques.addFront("Gabrielw")
deques.addBack("sasa")
console.log(deques)