class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(node) {
        if (!this.adjacencyList[node]) this.adjacencyList[node] = []
    }

    // The addEdge takes two nodes as parameters, and it adds each node to the other's array of connections.
    addEdge(node1, node2) {
        this.adjacencyList[node1] = [...this.adjacencyList[node1], node2]
        this.adjacencyList[node2].push(node1)
    }

    removeEdge(node1, node2) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(v => v !== node2)
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(v => v !== node1)
    }


    removeVertex(node) {

        while (this.adjacencyList[node].length) {
            const adjacentNode = this.adjacencyList[node].pop();
            this.removeEdge(node, adjacentNode)
        }
        delete this.adjacencyList[node]
    }

    dfsGraphTraversal(startNode) {
        let finalTraversedList = [];
        let visitedObject = {};

        const dfsRecursive = (vertex) => {
            if (!vertex) {
                return;
            }

            visitedObject = { ...visitedObject, [vertex]: true };
            finalTraversedList.push(vertex);

            const adjNodes = this.adjacencyList[vertex];

            if (adjNodes.length) {
                adjNodes.forEach(adjVertex => {
                    if (!visitedObject[adjVertex]) {
                        dfsRecursive(adjVertex);
                    }
                });
            }
        }

        dfsRecursive(startNode);

        return finalTraversedList;
    }

    dfsGraphTraversalIterative(startNode) {
        let finalTraversedList = [];
        let visitedObject = {};
        let nodesStack = [startNode];
        visitedObject[startNode] = true;

        while (nodesStack.length !== 0) {
            const vertex = nodesStack.pop();
            finalTraversedList.push(vertex);


            this.adjacencyList[vertex].forEach(node => {
                if (!visitedObject[node]) {
                    visitedObject[node] = true;
                    nodesStack.push(node);
                }
            })

        }

        return finalTraversedList;
    }

    bfsGraphTraversalIterative(startNode) {
        let finalTraversedList = [];
        let visitedObject = {};
        let nodesStack = [startNode];
        visitedObject[startNode] = true;

        while (nodesStack.length !== 0) {
            const vertex = nodesStack.shift();
            finalTraversedList.push(vertex);


            this.adjacencyList[vertex].forEach(node => {
                if (!visitedObject[node]) {
                    visitedObject[node] = true;
                    nodesStack.push(node);
                }
            })

        }

        return finalTraversedList;
    }

}


function addEdgesAndNode(graph) {
    // graph.addVertex("Buenos Aires")
    // graph.addVertex("Santa fe")
    // graph.addVertex("Córdoba")
    // graph.addVertex("Mendoza")

    // graph.addEdge("Buenos Aires", "Córdoba")
    // graph.addEdge("Buenos Aires", "Mendoza")
    // graph.addEdge("Santa fe", "Córdoba")

    // console.log(graph);

    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "E");
    graph.addEdge("D", "F");
    graph.addEdge("E", "F");
}

module.exports = () => {
    const newGraph = new Graph();
    addEdgesAndNode(newGraph)

    //Argentina.removeEdge("Buenos Aires", "Córdoba");

    console.log(newGraph);

    //Argentina.removeVertex("Mendoza");

    // console.log(newGraph.dfsGraphTraversal("A"));
    //console.log(newGraph.dfsGraphTraversalIterative("A"));
    console.log(newGraph.bfsGraphTraversalIterative("A"));
}