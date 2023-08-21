import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

interface iCheckoutForm {
    onPaymentSuccess: () => void
    successMessage: string
}
export default function CheckoutForm({ onPaymentSuccess, successMessage }: iCheckoutForm) {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        //http://localhost:3000/?payment_intent=pi_3KvjCMGEf5WGtFgK1neOd39n&payment_intent_client_secret=pi_3KvjCMGEf5WGtFgK1neOd39n_secret_NfKCME01fiV3vCX0aox2j4JNa&redirect_status=succeeded
        const { error } = await stripe.confirmPayment({
            elements,
            redirect: "if_required"
            // confirmParams: {
            //     // Make sure to change this to your payment completion page
            //     return_url: "http://localhost:3000",
            // },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error == undefined) {
            setMessage(successMessage);
            onPaymentSuccess()
        } else {
            if (error?.type === "card_error" || error?.type === "validation_error") {
                setMessage(error.message + "");
            } else {
                setMessage("An unexpected error occured.");
            }
        }

        setIsLoading(false);
    }

    return (
        <div>
            <form id="payment-form" onSubmit={handleSubmit}>
                <>
                    <PaymentElement id="payment-element" />
                    <button disabled={isLoading || !stripe || !elements} id="submit">
                        <span id="button-text">
                            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                        </span>
                    </button>
                </>
                {/* Show any error or success messages */}
                {message && <div id="payment-message"><p>{message}</p></div>}
            </form>
        </div>
    )
}
