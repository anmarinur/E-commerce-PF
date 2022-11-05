export default function Loading(){

    return (
        <div style={{height: "200px", fontSize: "1rem"}}>
            <div className="d-flex justify-content-center align-items-end fw-bold">
                LOADING
            </div>
            <div className="d-flex justify-content-center align-items-center loader" style={{rotate: "180deg"}}>
                <svg width={"100px"} height={"100px"} viewBox={"-4 -1 38 28"} >
                    <polygon fill="transparent" stroke="#A52323" stroke-width={"3"} points={"15, 0 30, 30 0, 30"}  ></polygon>
                </svg>
            </div>
        </div>
    )
}