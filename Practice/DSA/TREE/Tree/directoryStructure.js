// html
// ├── head
// └── body
//     ├── div
//     │   ├── p
//     │   └── div
//     └── span

class Tree{
  constructor(name){
    this.name=name
    this.children=[]
  }
  add(child){
    this.children.push(child)
  }
}
let html = new Tree('html')
let head = new Tree('head')
let body = new Tree('body')
let div1 = new Tree('div1')
let p = new Tree('p')
let div2 = new Tree('div2')
let span = new Tree('span')

html.add(head)
html.add(body)
body.add(div1)
body.add(span)
div1.add(p)
div1.add(div2)

// console.log(JSON.stringify(html, null, 2));
function printTree(node, indent = "") {
  console.log(indent + node.name);
  node.children.forEach(child => printTree(child, indent + "  "));
}

printTree(html);

