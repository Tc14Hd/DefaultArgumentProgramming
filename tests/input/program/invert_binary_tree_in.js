function node(name, left, right) {
    return {name, left, right};
}

function printNode(node) {

    process.stdout.write(node.name);
    if (node.left && node.right) {
        process.stdout.write("(");
        printNode(node.left);
        process.stdout.write(",");
        printNode(node.right);
        process.stdout.write(")");
    }
}

function printTree(tree) {
    printNode(tree);
    process.stdout.write("\n");
}

function invert(node) {
    if (node.left) invert(node.left);
    if (node.right) invert(node.right);
    var tmp = node.left;
    node.left = node.right;
    node.right = tmp;
}

var tree = node("A", node("B", node("C"), node("D")), node("E"));
printTree(tree);
invert(tree);
printTree(tree);
