// server.js - Stripe backend dla Clipper Teenager MVP
const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_XXXXXXXXXXXXXXXXXXXX'); // <-- Twój sekret klucz Stripe
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { priceId } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: 'https://your-app-success.com',
      cancel_url: 'https://your-app-cancel.com',
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4242, () => console.log('Stripe server running on port 4242'));
