import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo } from "react";
import logo from '../components/Nav/images/Logo_60x60.png'

export default function Contact() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
    })

    if (!isLoaded) return <div>Loading...</div>;

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
            <Map />
            <Footer />
        </>
    );
}

function Map() {
    const center = useMemo(() => ({lat: -34.645164, lng: -58.564632}), [])
    const mapContainerStyle = {
        height: "50vh",
        width: "100%"
    }

    return (
        <GoogleMap zoom={12} center={center} mapContainerStyle={mapContainerStyle} clickableIcons={false}>
            <MarkerF icon={logo} position={{lat: -34.652987, lng: -58.532539}} title = "Technoshop Av. Díaz Velez"/>
            <MarkerF icon={logo} position={{lat: -34.606529, lng: -58.523029}} title = "Technoshop Av. Lastra"/>
            <MarkerF icon={logo} position={{lat: -34.626094, lng: -58.738172}} title = "Technoshop Au Acceso Oeste"/>
            <MarkerF icon={logo} position={{lat: -34.668874, lng: -58.379502}} title = "Technoshop Av. Hipólito Yrigoyen"/>
            <MarkerF icon={logo} position={{lat: -34.687691, lng: -58.633870}} title = "Technoshop Av. Eva Perón"/>
        </GoogleMap>
    )
}