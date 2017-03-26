export interface Tree{
 value: string​;
}
let nodeFound = true;
function findChild(parent: Tree​, child: Tree​): boolean​ {
    for (let key in parent) {
        let node = parent[key];
        if (typeof (node) === 'object') {
            if (node.value == child.value) {
                return compareNodes(node, child)
            } else {
                findChild(node, child)
            }
        }
    }
    return nodeFound;

}
function compareNodes(firstNode: Tree​, secondNode: Tree​): boolean​ {
    for (let key in secondNode) {
        let leaf = secondNode[key];
        if (!(Object.prototype.hasOwnProperty.call(firstNode, key))) {
            return nodeFound = false;
        } else {
            if (typeof (leaf) === 'object') {
                if (leaf.value == firstNode[key].value) {
                    compareNodes(leaf, firstNode[key])
                } else {
                    return nodeFound = false;
                }
            }
            else {
                if (firstNode[key] != leaf) {
                    return nodeFound = false;
                } else {
                    nodeFound = true;

                }
            }

        }
    }
    return nodeFound;

}


export { findChild  };
