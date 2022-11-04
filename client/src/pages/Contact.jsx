import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo } from "react";
import logo from '../components/Nav/images/Logo_60x60.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com';
import { useState } from "react";
import { toast } from "react-toastify";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Contact() {

    const frmContact = {
        userName: '',
        userEmail: '',
        emailTitle:'',
        emailDetails:'' };

    const [contact, setContact] = useState(frmContact);
    const [store, setStore] = useState('')

    const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact, [name]:value}); 
    };

    const handleClick = e =>{
	    e.preventDefault();
        // emailjs.init('px6i5Eu00A48ZrODj');
		emailjs.send('default_service','template_mhmbvwk', contact, 'px6i5Eu00A48ZrODj')
		.then((response) => {
            setContact(frmContact);
            toast.success('Message sent succesfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
		}, (err) => {
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
		});
   }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
    })

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <>
            <Nav />
            <div className="container my-5">
                <h2 className="fw-bold text-danger text-center my-2 fs-1">Contact Us</h2>
                <div className="d-flex flex-row justify-content-between my-5">
                    <div className="w-50">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold fs-5">Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="userName" value={contact.userName} onChange={(e) => handleChange(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold fs-5">Email:</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name="userEmail" value={contact.userEmail} onChange={(e) => handleChange(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold fs-5">Title:</Form.Label>
                                <Form.Control type="text" placeholder="Enter a title" name="emailTitle" value={contact.emailTitle} onChange={(e) => handleChange(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold fs-5">Message:</Form.Label>
                                <Form.Control as="textarea" rows={2} placeholder="Enter your message" name="emailDetails" value={contact.emailDetails} onChange={(e) => handleChange(e)}/>
                            </Form.Group>
                        </Form>
                        <Button variant="danger" type="submit" onClick={(e) => handleClick(e)}>
                            Submit
                        </Button>
                    </div>
                    <div className="w-40">
                        <Dropdown>
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                Select one of our stores
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onSelect={() => setStore('Technoshop Av. Díaz Velez')}>Technoshop Av. Díaz Velez</Dropdown.Item>
                                <Dropdown.Item onSelect={() => setStore('Technoshop Av. Lastra')}>Technoshop Av. Lastra</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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
                </div>
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