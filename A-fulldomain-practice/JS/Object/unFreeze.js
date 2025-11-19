
const frozen = Object.freeze({ a: 1, b: 2 })

const unfrozen = { ...frozen }

unfrozen.b = 5
console.log(unfrozen);