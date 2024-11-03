const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	const { items, email } = req.body;

	const transformedItems = items.map((item) => ({
		quantity: item.quantity,
		price_data: {
			currency: 'eur',
			unit_amount: Math.round(item.price * 100),
			product_data: {
				name: item.title,
				description: item.description,
				images: [item.image],
			},
		},
	}));

	if (req.method === 'POST') {
		try {
			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				shipping_options: [
					{
						shipping_rate_data: {
							type: 'fixed_amount',
							fixed_amount: {
								amount: 0,
								currency: 'EUR',
							},
							display_name: 'Free shipping',
							delivery_estimate: {
								minimum: {
									unit: 'business_day',
									value: 5,
								},
								maximum: {
									unit: 'business_day',
									value: 7,
								},
							},
						},
					},
					{
						shipping_rate: 'shr_1QH18RFQ33mFda1wiC75E5FE',
					},
				],
				shipping_address_collection: {
					allowed_countries: ['GB', 'US', 'CA', 'IT'],
				},

				line_items: transformedItems,
				mode: 'payment',
				success_url: `${req.headers.origin}/?success=true`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
				metadata: {
					email,
					images: JSON.stringify(items.map((item) => item.image)),
				},
			});

			res.status(200).json({ id: session.id });
		} catch (err) {
			console.error('Error creating checkout session:', err.message);
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
