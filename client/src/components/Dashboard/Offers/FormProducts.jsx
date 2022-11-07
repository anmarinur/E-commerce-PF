

export default function FormProducts({allproducts, handleProducts}){

  return (
    <div className="row mx-1 my-1">
      {allproducts.map((e) => (
        <div
          key={e.id}
          className="col-xl-4 col-md-4 col-sm-6 col-6 form-check"
        >
          <input
            className="form-check-input"
            type="radio"
            name="products"
            id={e.id}
            value={e.name}
            onChange={(e) => {
              handleProducts(e);
            }}
          />
          <label className="form-check-label fw-semibold" htmlFor={e.id}>
            {e.name}
          </label>
        </div>
      ))}
    </div>
  );
}