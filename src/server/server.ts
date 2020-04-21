import path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}`);
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000')
});
