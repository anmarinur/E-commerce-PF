import React from "react";

export default function Footer(){
    return(
        <div className="container-fluid" style={{ backgroundColor: "#a52323"}}>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item "><a href={"/"} className="nav-link px-2 text-white">Home</a></li>
                    <li className="nav-item "><a href={`/privacy`} className="nav-link px-2 text-white">Privacy Policies</a></li>
                    <li className="nav-item "><a href={`/contact`} className="nav-link px-2 text-white">Contact Us</a></li>
                    <li className="nav-item "><a href={`/faqs`} className="nav-link px-2 text-white">FAQs</a></li>
                    <li className="nav-item "><a href={`/about`} className="nav-link px-2 text-white">About</a></li> {/*HREF HARDCODEADO!!! */}
                </ul>
                <p className="text-center text-white">© 2022 Tecnoshop</p>
            </footer>
        </div>
    )
}