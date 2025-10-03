const original = [
  1,
  { name: "Alice", id: 101 },
  [5, 6]
]

const copy=[...original]
copy[0]=5
copy[1].name="bob"
copy[2].push(8)
console.log(original)
console.log(copy)