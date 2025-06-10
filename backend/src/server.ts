import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (_req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
