const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.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);
const payments = require('./routes/payments');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/payments', payments);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
