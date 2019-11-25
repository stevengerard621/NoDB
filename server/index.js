const express = require('express');
const cors = require('cors');
const gradient = require('gradient-string');
const entryCtrl = require('./controllers/entryCtrl')
const PORT = 6200;


const app = express();

app.use(cors());
app.use(express.json());

const { getEntry, postEntry, editEntry, deleteEntry } = entryCtrl

app.get('/api/journal', getEntry);
app.post('/api/journal', postEntry);
app.put('/api/journal/:id', editEntry);
app.delete('/api/journal/:id', deleteEntry)


app.listen(PORT, () => console.log(`${PORT}`, gradient.instagram `FIRING ON ALL CYLINDERS`))
