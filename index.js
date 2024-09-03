const express = require('express');
const app = express();

app.use(require('./routes/index'));
app.use(express.json()); 

let items = [
  { id: 1, name: 'Libro 1' },
  { id: 2, name: 'Libro 2' },
  { id: 3, name: 'Libro 3' }
];


app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
    const { name } = req.body; 
    if (!name) {
      return res.status(400).json({ error: 'El campo "name" es requerido' });
    }
    const newItem = {
      id: items.length + 1, 
      name
    };
    items.push(newItem); 
    res.status(201).json(newItem); 
});

app.put('/items/:id', (req, res) => {
    const { id } = req.params; 
    const { name } = req.body; 

    const item = items.find(item => item.id === parseInt(id));
  
    if (!item) {
      return res.status(404).json({ error: 'Item no encontrado' });
    }
  
    if (!name) {
      return res.status(400).json({ error: 'El campo "name" es requerido' });
    }
  
    item.name = name;
  
    res.json(item);
});


app.listen(3000, () => {
  console.log('API ejecutándose en http://localhost:3000');
});
