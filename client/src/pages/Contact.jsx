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
                <div className="d-flex flex-row flex-fill justify-content-around my-5">
                    <div className="w-50 me-3">
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
                    <div className="w-25 ms-3">
                        <Dropdown className="mb-4">
                            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                Select one of our stores
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setStore('Technoshop Av. Díaz Velez')}>Technoshop Av. Díaz Velez</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStore('Technoshop Av. Lastra')}>Technoshop Av. Lastra</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStore('Technoshop Au Acceso Oeste')}>Technoshop Au Acceso Oeste</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStore('Technoshop Av. Hipólito Yrigoyen')}>Technoshop Av. Hipólito Yrigoyen</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStore('Technoshop Av. Eva Perón')}>Technoshop Av. Eva Perón</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {
                            store === 'Technoshop Av. Díaz Velez' ? 
                                <div className="card text-center text-dark bg-light pt-3 my-3 lh-1">
                                    <p className="fs-6 text-danger">Tel. 5555555</p>
                                    <p className="fs-6">Monday to Friday from 9 am to 8 pm</p>
                                    <p className="fs-6">Saturday from 9 am to 5 pm</p>
                                </div>
                            : store === 'Technoshop Av. Lastra' ?
                                <div className="card text-center text-dark bg-light pt-3 lh-1">
                                    <p className="fs-6 text-danger">Tel. 6666666</p>
                                    <p className="fs-6">Monday to Friday from 12 pm to 8 pm</p>
                                    <p className="fs-6">Saturday from 9 am to 5 pm</p>
                                    <p className="fs-6">Sunday from 9 am to 12pm</p>
                                </div>
                            : store === 'Technoshop Au Acceso Oeste' ?
                                <div className="card text-center text-dark bg-light pt-3 lh-1">
                                    <p className="fs-6 text-danger">Tel. 3333333</p>
                                    <p className="fs-6">Monday to Friday from 9 am to 6 pm</p>
                                    <p className="fs-6">Saturday from 9 am to 5 pm</p>
                                </div>
                            : store === 'Technoshop Av. Hipólito Yrigoyen' ?
                                <div className="card text-center text-dark bg-light pt-3 lh-1">
                                    <p className="fs-6 text-danger">Tel. 11111111</p>
                                    <p className="fs-6">Monday to Friday from 8 am pm to 8 pm</p>
                                    <p className="fs-6">Saturday from 8 am to 8 pm</p>
                                    <p className="fs-6">Sunday from 9 am to 12pm</p>
                                    <p className="fs-6">Sunday from 9 am to 12pm</p>
                                </div>
                            : store === 'Technoshop Av. Eva Perón' ?
                                <div className="card text-center text-dark bg-light pt-3 lh-1">
                                    <p className="fs-6 text-danger">Tel. 44444444</p>
                                    <p className="fs-6">Monday to Friday from 12 am to 10 pm</p>
                                    <p className="fs-6">Saturday from 12 pm to 8 pm</p>
                                </div>  
                            : 
                            <div className="card text-center text-dark bg-light pt-3 lh-1">
                                <p className="fs-6 text-danger">Select one option if you want to know</p>
                                <p className="fs-6 text-danger">the time our stores are open/close</p>
                            </div>  
                        }
                        
                        <h3 className="fw-bold fs-5 mt-5">E-Mail</h3>
                        <a href="mailto:tecnoshop.henry@gmail.com" style={{textDecoration: 'none'}}><p className="mb-4 fs-5 text-danger">tecnoshop.henry@gmail.com</p></a>

                        <h3 className="fw-bold fs-5 mt-5">Social Media</h3>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="68" height="68" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a52834" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="68" height="68" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a52834" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </div>
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