import React from "react";
import { Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

//const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PK + '');

interface iPayNow {
    title?: string
    successMessage?: string
    stripe: Promise<Stripe | null>
    clientSecret: string
    onClick: () => void
    onPaymentSuccess: () => void
}
export default function PayNow({
    title = "Pay With Stripe", stripe, clientSecret = "", onClick = () => { }, onPaymentSuccess, successMessage = "Payment Successfull"
}: iPayNow) {


    return (
        <div className="rs">
            {!clientSecret && <button type="button" onClick={() => {
                //do your validation before payment
                onClick()
            }}>{title}</button>}
            {clientSecret && (
                <Elements
                    options={{
                        clientSecret,
                        appearance: {
                            theme: "stripe"
                        },
                    }}
                    stripe={stripe}
                >
                    <CheckoutForm onPaymentSuccess={onPaymentSuccess} successMessage={successMessage} />
                </Elements>
            )}
        </div>
    )
}
