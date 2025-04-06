const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
// Simple in-memory storage for demonstration
let orders = [];
app.get('/', (req, res) => {
    res.send('Server is running...');
});
app.post('/api/checkout', (req, res) => {
    const orderData = req.body;
    orders.push(orderData);
    console.log('Order received:', orderData);
    res.status(201).send({ message: 'Order placed successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});