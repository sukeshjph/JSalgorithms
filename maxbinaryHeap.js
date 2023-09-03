class BH {
    constructor(values) {
        this.values = values || [];
    }

    insert(value) {
        this.values.push(value);

        for (let index = this.values.length - 1; index > 0;) {
            const parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (value > parent) {
                this.values[parentIndex] = value;
                this.values[index] = parent;

                index = parentIndex;
            }

            else break;

        }

        return this;

    }

    sinkDown() {
        const idx = 0;
        const length = this.values.length;
        let swap = null;

        const currentValue = this.values[idx];

        while (true) {
            const leftChildIndex = 2 * idx - 1;
            const rightChildIndex = 2 * idx + 1;

            const leftChild = this.values[leftChildIndex];
            const rightChild = this.values[rightChildIndex];

            if (leftChildIndex < length) {
                if (currentValue < leftChild) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                if (swap === null && currentValue < rightChild || swap !== null && rightChild > leftChild) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) {
                break;
            }

            this.values[idx] = this.values[swap];
            this.values[swap] = currentValue;

            idx = swap;
        }
    }

    remove() {
        const max = this.values[0];
        const end = this.values.pop();

        this.values[0] = end;

        sinkDown();
        return max;
    }
}

module.exports = () => {
    const mbinaryHeap = new BH([91, 36, 90]);

    mbinaryHeap.insert(38)

    console.log(mbinaryHeap)
}