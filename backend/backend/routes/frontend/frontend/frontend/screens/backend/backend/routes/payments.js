const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.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);

// Endpoint do tworzenia subskrypcji
router.post('/create-subscription', async (req, res) => {
  const { customerEmail, priceId } = req.body;
  try {
    // utwórz klienta w Stripe
    const customer = await stripe.customers.create({
      email: customerEmail,
    });

    // utwórz subskrypcję
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    res.json(subscription);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
