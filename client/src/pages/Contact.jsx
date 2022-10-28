import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function Contact() {
    return (
        <>
            <Nav />
            <div class="container mt-4">
                <h2>Contact Us</h2><br />
                <h3>Customer care Center</h3>
                <p>Monday to Friday from 9 a.m. to 8 p.m. / Saturday from 9 a.m. to 5 p.m.</p>

                <h3>E-Mail</h3>
                <p>ecommerce@tecnoshop.com.ar</p>

                <h3>Phone</h3>
                <p>55-55555</p>

                <h3>Social Networks</h3>
                <p>https://www.facebook.com/tecnoshop.arg/</p>
                <p>https://www.instagram.com/tecnoshop.arg/</p>

            </div>
            <Footer />
        </>
    );
}