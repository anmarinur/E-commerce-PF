import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function FAQs() {
    return (
        <>
            <Nav />
            <div class="container mt-4">
                <h1>Questions and Answers</h1><br />
                <h3>Purchasing process</h3><br />

                <h5> How do I buy at Tecnoshop?</h5>
                <p> You can make a purchase, when you have registered in Tecnoshop.com.ar</p>

                <h5>How do I track my order?</h5>
                <p> Please, enter your profile and you will be able to track your purchase</p>

                <h5> How do I cancel my order?</h5>
                <p> To cancel your order you must contact us by sending an email to ecommerce@tecnoshop.com.ar</p><br />

                <h3>Payments</h3><br />

                <h5> What are the payment methods available?</h5>
                <p> You can pay for your orders in cash or with a Credit Card, debit card or by Mercado Pago through Payment Coupons.</p>
                <h5> Is it safe to pay with my credit card at Tecnoshop.com.ar</h5>
                <p>
                    Yes it is safe. We understand that the security of your personal information is of utmost importance to you. We comply with the international data protection standard, so that your personal and credit card information is protected from unauthorized access.</p>
                <h5> How do I know that my payment was credited?</h5>
                <p> Once your payment has been correctly credited by administration, you will receive an email informing you of the credit number and the corresponding invoice number.</p>
                <h2></h2>
                <p></p>
            </div>
            <Footer />
        </>
    );
}