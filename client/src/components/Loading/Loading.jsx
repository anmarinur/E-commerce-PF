export default function Loading({size, text}){
    const textShow = text || false
    const sizeLoad = size || "100px"
    return (
        <div style={{height: "auto", width: "fit-content", fontSize: "1rem"}}>
            <div style={{fontSize:"1rem"}} className="d-flex justify-content-center align-items-end fw-bold">
                {textShow && "LOADING" }
            </div>
            <div className="d-flex justify-content-center align-items-center loader" style={{rotate: "180deg"}}>
                <svg width={sizeLoad} height={sizeLoad} viewBox={"-4 -1 38 28"} >
                    <polygon fill="transparent" stroke="#A52323" stroke-width={"3"} points={"15, 0 30, 30 0, 30"}  ></polygon>
                </svg>
            </div>
        </div>
    )
}