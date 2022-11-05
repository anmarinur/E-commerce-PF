import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Card } from "react-bootstrap";
import Ana from "./Imagenes/Ana.jpeg";
import Nahuel from "./Imagenes/Nahuel.jpeg";
import Damian from "./Imagenes/Damian.jpeg";
import Estefano from "./Imagenes/Estefano.jpeg";
import Anderson from "./Imagenes/Anderson.jpeg";
import Enrique from "./Imagenes/Enrique.jpeg";
import Juan from "./Imagenes/Juan.jpeg";

export default function Developers() {

    let info = [
        { name: "Ana Belén Gonzalvez", email: "mailto:damiangonzalez@gmail.com", gitHub: "https://github.com/AnaGonzalvez", linkedIn: "https://linkedin.com/in/anabeléngonzalvez", img: Ana },
        { name: "Juan Ignacio Grodz", email: "mailto:jigrodz@gmail.com", gitHub: "https://github.com/Juani2409", linkedIn: "https://www.linkedin.com/in/juan-ignacio-grodz-80ab57241/", img: Juan },
        { name: "Damian Gonzalez", email: "mailto:damiangonzalez@gmail.com", gitHub: "https://github.com/nangonz", linkedIn: "https://www.linkedin.com/in/dami-gonzalez/", img: Damian },
        { name: "Anderson Marin", email: "mailto:andersonmarindev@gmail.com", gitHub: "https://github.com/anmarinur", linkedIn: "https://www.linkedin.com/in/andersonmarindev/", img: Anderson },
        { name: "Estefano Muller", email: "mailto:stefano.muller@hotmail.com", gitHub: "https://github.com/emuller1996", linkedIn: "https://www.linkedin.com/in/estefano-m%C3%BCller-3a9b8b237/", img: Estefano },
        { name: "Nahuel Puig", email: "mailto:puignahuel.ventas@gmail.com", gitHub: "https://github.com/nahuel3223", linkedIn: "https://www.linkedin.com/in/nahuel-lautaro-puig-172a94181", img: Nahuel },
        { name: " Enrique Lopez Flores", email: "mailto:enriqueflores@gmail.com", gitHub: "https://github.com/ingenriquelopez", linkedIn: "https://www.linkedin.com/in/enrique-lopez-flores-461322254/", img: Enrique }
    ]

    return (
        <div>
            <Nav />
            <div class="container mt-4">
                <h2 className="fw-bold text-danger text-center my-2 fs-1">Developers</h2>

                {info.map((e) =>
                    <Card className="center" style={{
                        display: "flex",
                        width: "auto",
                        maxWidth: "50em",
                        maxHeight: "30em",
                        marginTop: "2em",
                        marginBottom: "2em",
                        borderRadius: "10px",
                        marginLeft: "2em",

                    }}>
                        <div class="row g-0" >

                            <div class="col-md-3" >
                                <Card.Img
                                    style={{
                                        // width: "auto",
                                        maxWidth: "14em",
                                        // height:'auto',
                                        maxHeight: "20em",
                                        marginTop: "2em",
                                        marginBottom: "2em",
                                        borderRadius: "10px",
                                        marginLeft: "2em",

                                    }}
                                    src={e.img}
                                />
                            </div>
                            <div class="col-md-8"   >
                                <Card.Subtitle className=" fs-5 "
                                    style={{
                                        display: "inline-block",
                                        width: "auto",
                                        maxWidth: "40em",
                                        maxHeight: "25em",
                                        marginTop: "3.5em",
                                        marginBottom: "3em",
                                        marginLeft: "10em"

                                    }}  >

                                    <b> {e.name} </b> <br /><br />
                                    Full Stack-Developer <br /><br />
                                    <div >
                                        <div class="d-flex">
                                            <a href={e.gitHub} className="nav-link px-2 text-white" target="_blank">
                                                <i class="fa-brands fa-github fa-3x text-black"></i></a>
                                            <a href={e.email}>
                                                <i class="fa-solid fa-envelope fa-3x text-info"></i></a>
                                            <a href={e.linkedIn} className="nav-link px-2 " target="_blank">
                                                <i class="fa-brands fa-linkedin fa-3x text-primary"></i>
                                            </a>

                                        </div>
                                    </div>
                                </Card.Subtitle>
                            </div>
                        </div>
                    </Card>
                )}
            </div>
            <Footer />
        </div>

    );
}