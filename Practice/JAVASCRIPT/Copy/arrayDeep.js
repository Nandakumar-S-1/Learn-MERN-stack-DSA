const original = [
  1,
  { name: "Alice", id: 101 },
  [5, 6]
]


const copy = JSON.parse(JSON.stringify(original))

copy[0]=7
copy[1].name='bob'
copy[2].push(99)

console.log("original",original);
console.log("copy",copy)
