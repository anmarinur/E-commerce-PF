import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Card } from "react-bootstrap";
import Ana from "./Imagenes/Ana.jpeg";
import Nahuel from "./Imagenes/Nahuel.jpeg";
import Damian from "./Imagenes/Damian.jpeg";
import Estefano from "./Imagenes/Estefano.jpeg";
import Anderson from "./Imagenes/Anderson.jpeg";
import Enrique from "./Imagenes/Enrique.jpeg"
import Juan from "./Imagenes/Juan.jpeg"
import Transition from "../../components/Transition/Transition";
import { useEffect } from "react";
import GoUpButton from "../../components/GoUpButton/GoUpButton";

export default function Developers() {

    useEffect(()=>{
        window.scroll(0,0);
    }, []);

    return (
        <div>
            <Nav />
            <Transition>
            <GoUpButton />
            <div class="container mt-4">
                <h1>Developers</h1><br />

                <Card>
                    <div class="row g-0">

                        <div class="col-md-3" >
                            <Card.Img
                                style={{
                                    width: "auto",
                                    maxWidth: "10em",
                                    maxHeight: "30em",
                                    marginTop: "2em",
                                    marginBottom: "2em",
                                    borderRadius: "10px",
                                    marginLeft: "2em"
                                }}
                                src={Ana}
                            />
                        </div>
                        <div class="col-md-8"  >
                            <Card.Subtitle className=" fs-5 "
                                style={{
                                    width: "auto",
                                    maxWidth: "40em",
                                    maxHeight: "25em",
                                    marginTop: "2.5em",
                                    marginBottom: "3em",
                                    marginLeft: "1em"

                                }}  >

                                Ana Belén Gonzalvez  <br /><br />
                                GitHub: AnaGonzalvez@mail: <br /><br />
                                E-mail: anaa.gonzalvez2@gmail.com <br /><br />
                                LinkedIN:  www.linkedin.com/in/anabeléngonzalvez <br />

                            </Card.Subtitle>
                        </div>
                    </div>
                </Card>


                <Card>
                    <div class="row g-0">

                        <div class="col-md-3" >
                            <Card.Img
                                style={{
                                    width: "auto",
                                    maxWidth: "10em",
                                    maxHeight: "30em",
                                    marginTop: "2em",
                                    marginBottom: "2em",
                                    borderRadius: "10px",
                                    marginLeft: "2em"
                                }}
                                src={Damian}
                            />
                        </div>
                        <div class="col-md-8"  >
                            <Card.Subtitle className=" fs-5 "
                                style={{
                                    width: "auto",
                                    maxWidth: "40em",
                                    maxHeight: "25em",
                                    marginTop: "2.5em",
                                    marginBottom: "3em",
                                    marginLeft: "1em"

                                }}  >

                                Damian Gonzalez  <br /><br />
                                GitHub: https://github.com/nangonz <br /><br />
                                E-mail: damiangonzalez@gmail.com <br /><br />
                                LinkedIN: https://www.linkedin.com/in/dami-gonzalez/

                            </Card.Subtitle>
                        </div>
                    </div>
                </Card>


                <Card>
                    <div class="row g-0">

                        <div class="col-md-3" >
                            <Card.Img
                                style={{
                                    width: "auto",
                                    maxWidth: "10em",
                                    maxHeight: "30em",
                                    marginTop: "2em",
                                    marginBottom: "2em",
                                    borderRadius: "10px",
                                    marginLeft: "2em"
                                }}
                                src={Anderson}
                            />
                        </div>
                        <div class="col-md-8"  >
                            <Card.Subtitle className=" fs-5 "
                                style={{
                                    width: "auto",
                                    maxWidth: "40em",
                                    maxHeight: "25em",
                                    marginTop: "2.5em",
                                    marginBottom: "3em",
                                    marginLeft: "1em"

                                }}  >

                                Anderson Marin  <br /><br />
                                GitHub: @anmarinur <br /><br />
                                E-mail: andersonmarindev@gmail.com  <br /><br />
                                LinkedIN:  https://www.linkedin.com/in/andersonmarindev/

                            </Card.Subtitle>
                        </div>
                    </div>
                </Card>


                <Card>
                    <div class="row g-0">

                        <div class="col-md-3" >
                            <Card.Img
                                style={{
                                    width: "auto",
                                    maxWidth: "10em",
                                    maxHeight: "30em",
                                    marginTop: "2em",
                                    marginBottom: "2em",
                                    borderRadius: "10px",
                                    marginLeft: "2em"
                                }}
                                src={Estefano}
                            />
                        </div>
                        <div class="col-md-8"  >
                            <Card.Subtitle className=" fs-5 "
                                style={{
                                    width: "auto",
                                    maxWidth: "40em",
                                    maxHeight: "25em",
                                    marginTop: "2.5em",
                                    marginBottom: "3em",
                                    marginLeft: "1em"

                                }}  >

                                Estefano Muller  <br /><br />
                                GitHub: emuller1996 <br /><br />
                                E-mail: stefano.muller@hotmail.com <br /><br />
                                LinkedIN: https://www.linkedin.com/in/estefano-m%C3%BCller-3a9b8b237/

                            </Card.Subtitle>
                        </div>
                    </div>
                </Card>


                <Card>
                    <div class="row g-0">

                        <div class="col-md-3" >
                            <Card.Img
                                style={{
                                    width: "auto",
                                    maxWidth: "10em",
                                    maxHeight: "30em",
                                    marginTop: "2em",
                                    marginBottom: "2em",
                                    borderRadius: "10px",
                                    marginLeft: "2em"
                                }}
                                src={Nahuel}
                            />
                        </div>
                        <div class="col-md-8"  >
                            <Card.Subtitle className=" fs-5 "
                                style={{
                                    width: "auto",
                                    maxWidth: "40em",
                                    maxHeight: "25em",
                                    marginTop: "2.5em",
                                    marginBottom: "3em",
                                    marginLeft: "1em"

                                }}  >


                                Nahuel Puig  <br /> <br />
                                GitHub: https://github.com/nahuel3223  <br /> <br />
                                E-mail: puignahuel.ventas@gmail.com <br /> <br />
                                LinkedIN: https://www.linkedin.com/in/nahuel-lautaro-puig-172a94181
                            </Card.Subtitle>
                        </div>
                    </div>
                </Card>




                <Card>
                    <div class="row g-0">

                        <div class="col-md-3" >
                            <Card.Img
                                style={{
                                    width: "auto",
                                    maxWidth: "10em",
                                    maxHeight: "30em",
                                    marginTop: "2em",
                                    marginBottom: "2em",
                                    borderRadius: "10px",
                                    marginLeft: "2em"
                                }}
                                src={Juan}
                            />
                        </div>
                        <div class="col-md-8"  >
                            <Card.Subtitle className=" fs-5 "
                                style={{
                                    width: "auto",
                                    maxWidth: "40em",
                                    maxHeight: "25em",
                                    marginTop: "2.5em",
                                    marginBottom: "3em",
                                    marginLeft: "1em"

                                }}  >


                                Juan Ignacio Grodz  <br /> <br />
                                GitHub: https://github.com/Juani2409 <br /> <br />
                                E-mail: jigrodz@gmail.com <br /> <br />
                                LinkedIN: https://www.linkedin.com/in/juan-ignacio-grodz-80ab57241/
                            </Card.Subtitle>
                        </div>
                    </div>
                </Card>



                <Card>
                    <div class="row g-0">

                        <div class="col-md-3" >
                            <Card.Img
                                style={{
                                    width: "auto",
                                    maxWidth: "10em",
                                    maxHeight: "30em",
                                    marginTop: "2em",
                                    marginBottom: "2em",
                                    borderRadius: "10px",
                                    marginLeft: "2em"
                                }}
                                src={Enrique}
                            />
                        </div>
                        <div class="col-md-8"  >
                            <Card.Subtitle className=" fs-5 "
                                style={{
                                    width: "auto",
                                    maxWidth: "40em",
                                    maxHeight: "25em",
                                    marginTop: "2.5em",
                                    marginBottom: "3em",
                                    marginLeft: "1em"

                                }}  >


                                Enrique Lopez Flores  <br /><br />
                                GitHub: ingenriquelopez@mail: <br /><br />
                                E-mail: Enriqueflores@gmail.com <br /><br />
                                LinkedIN:  <br />
                            </Card.Subtitle>
                        </div>
                    </div>
                </Card>

            </div>
            </Transition>
            <Footer />
        </div>

    );
}