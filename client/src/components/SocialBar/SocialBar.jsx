import { useEffect, useState } from "react";

export default function SocialBar(){

    const num = process.env.REACT_APP_WHATSAPP || "";
    const [opacity, setOpacity] = useState("0");

    useEffect(()=>{
        setTimeout(()=>setOpacity("1"), 500);
    }, [])

    return (
        <div style={{opacity: opacity}} className="social-bar">
            <a href={`https://wa.me/${num}`} className="icon icon-whatsapp" target="_blanck"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/tecnoshopstore" className="icon bg-danger icon-instagram" target="_blanck"><i class="fa-brands fa-instagram"></i></a>
        </div>
    )
}