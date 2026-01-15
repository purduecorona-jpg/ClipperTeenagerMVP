const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const payments = require('./routes/payments');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/payments', payments);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
