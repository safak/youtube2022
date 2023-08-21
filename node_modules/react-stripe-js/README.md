# React Stripe Element Wrapper
Compitable with react js and next js.

## Installation Commands

```bash
npm install react-stripe-js
```

> screenshot 1

![screenshot](screenshot.png)

## How to use

1. import css in **index.js/ts** or **app.jsx or app.tsx**.

```ts
import 'react-stripe-js/dist/style.css';
```
#### use with webhook - (recomended)
```tsx
import React, { useState } from 'react';
import { PayNow, loadStripe } from 'react-stripe-js';

export const PayButtonComp = () => {
  const stripe = loadStripe("pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

  const [clientSecret, setClientSecret] = useState<string>("");

  const createOrderAndGetPaymentIntent = (amount: number) => {
    // in this function we will store the order info and get a payment intent back from server.
    if (!clientSecret) {
      const orderInfo={
        amount:amount,
        receiptEmail: "immilon27@gmail.com",
        carts:[
          // some product here
        ]
      }
      fetch("http://localhost:2727/create-order-get-client-secret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderInfo),
      }).then((res) => res.json()).then((data) => setClientSecret(data.clientSecret));
    }
  }

  return <PayNow
      title='Click To Pay'
      successMessage='payment done,creating order please wait....'
      stripe={stripe}
      clientSecret={clientSecret}
      onClick={() => {
        // todo: other input field validation (like name,shipping address,etc)
        // todo: create the order and store into database by setting payment-status to pending
        createOrderAndGetPaymentIntent(55)
      }}
      onPaymentSuccess={() => {
        console.log("wow, payment done. the webhook will be called, so we will update order info in webhook and make the payment-status pending to paid.");
      }}
    />
}

```

#### backend api should look like this with webhook

```ts
import express from 'express'
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()
const stripe = new Stripe(`${process.env.STRIPE_SKEY}`, {
    apiVersion: '2020-08-27',
});
const app = express()
app.use(cors({ origin: true }))
app.use(express.json());


app.get('/', (req, res) => {
    res.send("okk")
})

interface IOrderDto{
  amount: number
  receiptEmail: string
  carts: any[]
}

app.post("/create-order-get-client-secret", async (req, res) => {
    const orderInfo = req.body as IOrderDto

    // save the order info in database with payment-status = "pending"
    // i am using prisma ORM as an example
    const orderObj = await req.prisma.order.create({
        data: {
            ...otherParams,
            paymentStatus: PaymentStatus.pending,
            ownerId: req.user.userId,
        }
    })
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        receipt_email: orderInfo.receiptEmail,
        metadata: {
            // we will use this order id to update the order when webhook called
            orderId:orderObj.id,
        },
        amount: 100 * amount,//amount in usd
        currency: "usd",
        // payment_method: "card"
        automatic_payment_methods: {
            enabled: true
        }
    });

    res.send({
        orderObj,
        clientSecret: paymentIntent.client_secret,
    });
});

// webhook should be post request
// so to setup the webhook and test you can use ngrok to generate live url from localhost.
// for setting up the webhook login into stripe dashboard, go to https://dashboard.stripe.com/test/developers this url and check bellow screenshot and steps to add this webhook endpoint.

interface IStripeWebhookMetaData {
    bookingId: string
}

interface IStripeWebhookData {
    object: {
        id: string
        object: string
        amount: number
        amount_received: number
        capture_method: "automatic"
        client_secret: string
        created: Date
        currency: string
        livemode: boolean
        metadata: IStripeWebhookMetaData
        receipt_email: null
        status: "succeeded"
    }
}

export interface IStripeWebhookEvent {
    id: string
    object: string
    api_version: string
    created: Date
    data: IStripeWebhookData
    livemode: boolean
    pending_webhooks: number
    request: {
        id: string
        idempotency_key: string
    }
    type: "payment_intent.succeeded"
}

app.post("/webhook",async (req: Request, res: Response) => {
    try {
        const event = req.body as IStripeWebhookEvent

        // Handle the event
        switch (event.type) {
            case "payment_intent.succeeded": {
                const paymentIntent = event.data.object
                // update the order payment status to paid (using prisma)
                await req.prisma.order.update({
                    where: {
                        id: paymentIntent.metadata.orderId,
                    },
                    data: {
                        paymentStatus: "paid",
                    },
                })
                // Return a 200 response to acknowledge receipt of the event
                res.json({ received: true })
                break
            }
            // ... handle other event types
            default: {
                console.log(`Unhandled event type ${event.type}`)
                // Return a 200 response to acknowledge receipt of the event
                res.json({ received: false })
            }
        }
    } catch (error) {
        console.log(`Unhandled event type ${(error as Error).message}`)
        res.json({ received: false })
    }
})


const port = process.env.PORT || 2828
app.listen(port, () => console.log("running on app:" + port))

```

#### how to add your webhook in stripe
> setp-1 (goto developers and click on webhook then click on add endpoint)

![webhook](webhook.png)
> setp-2 (put the endpoint url and select "payment_intent.succeeded" this event.)

![webhook2](webhook2.png)




___
___





#### use without webhook - (not recomended)

```tsx
import React, { useState } from 'react';
import { PayNow, loadStripe } from 'react-stripe-js';

export const PayButtonComp = () => {
  const stripe = loadStripe("pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

  const [clientSecret, setClientSecret] = useState<string>("");

  const createPaymentIntent = (amount: number) => {
    if (!clientSecret) {
      fetch("http://localhost:2727/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      }).then((res) => res.json()).then((data) => setClientSecret(data.clientSecret));
    }
  }

  return <>
    <PayNow
      title='Click To Pay'
      successMessage='payment done,creating order please wait....'
      stripe={stripe}
      clientSecret={clientSecret}
      onClick={() => {
        //other input field validation (like name,shipping address,etc)
        //if all field are valid then return true otherwise return false
        createPaymentIntent(55)
      }}
      onPaymentSuccess={() => {
        console.log("wow, payment done....store the order info into db now.");
      }}
    />
  </>
}


```
3. backend api should look like this

```ts
import express from 'express'
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()
const stripe = new Stripe(`${process.env.STRIPE_SKEY}`, {
    apiVersion: '2020-08-27',
});
const app = express()
app.use(cors({ origin: true }))
app.use(express.json());


app.get('/', (req, res) => {
    res.send("okk")
})
app.post("/create-payment-intent", async (req, res) => {
    const amount = req.body.amount
    console.log(amount);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 100 * amount,//amount usd
        currency: "usd",
        // payment_method: "card"
        automatic_payment_methods: {
            enabled: true
        }
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});


const port = process.env.PORT || 2828
app.listen(port, () => console.log("running on app:" + port))

```


### Author 

[Milon27](https://milon27.com)
Available for remote work [Contact Milon27](https://milon27.com)