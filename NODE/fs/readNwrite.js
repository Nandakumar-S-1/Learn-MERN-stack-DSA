
const fs=require('fs')

app.get('/file', (req, res) => {
  fs.writeFileSync('sample.txt', 'Hello from Node!');
  const data = fs.readFileSync('sample.txt', 'utf8');
  res.send(`File content: ${data}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});