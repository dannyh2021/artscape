const express = require('express');
const cors = require('cors');

const pinRoutes = require('./routes/pin.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/pins', pinRoutes);

app.get('/', (req, res) => res.send('Backend running'));
app.listen(5000, () => console.log('API on http://localhost:5000'));