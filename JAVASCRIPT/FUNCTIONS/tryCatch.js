function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  let result = divide(10, 0); 
  console.log("Result:", result);
} catch (err) {
  console.log("Error:", err.message);
}
