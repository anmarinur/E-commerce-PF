import React from "react";

export default function Footer(){
    return(
        <div class="container-fluid" style={{"background-color": "#a52323"}}>
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center pb-3 mb-3">
                    <li class="nav-item "><a href={window.location.href} class="nav-link px-2 text-white">Home</a></li>
                    <li class="nav-item "><a href={window.location.href} class="nav-link px-2 text-white">Features</a></li>
                    <li class="nav-item "><a href={window.location.href} class="nav-link px-2 text-white">Pricing</a></li>
                    <li class="nav-item "><a href={window.location.href} class="nav-link px-2 text-white">FAQs</a></li>
                    <li class="nav-item "><a href={window.location.href} class="nav-link px-2 text-white">About</a></li>
                </ul>
                <p class="text-center text-white">© 2022 Tecnoshop</p>
            </footer>
        </div>
    )
}