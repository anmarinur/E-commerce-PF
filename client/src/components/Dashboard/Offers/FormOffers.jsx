import axios from "axios";
import {React, useState, useEffect} from "react";
import isAdmin from "../../../utils/isAdmin";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getCategories } from "../../../redux/actions";
import Accordion from "react-bootstrap/Accordion";
import { ToastContainer, toast } from "react-toastify";
import { useHistory, useLocation } from "react-router-dom";
import Transition from "../../Transition/Transition";

export default function FormOffers() {
 const dispatch = useDispatch();
 const history = useHistory();
 const categories = useSelector((state) => state.categories);

 const [input, setInput]= useState({
  event: '',
  discount: 0,
  startDay: '',
  endDay: '',
  products: []
 })

 const [errors, setErrors] = useState({
   event: "Enter a valid event name",
   discount: "Enter a valid discount percentage",
   startDay: "Enter a valid start date to apply the discount",
   endDay: "Enter a valid end date to apply the discount",
   products: "Enter the products to apply the discount",
 });

 const [category, setCategory] = useState('');
 const [brands, setBrands] = useState('');
 const [allbrands, setAllBrands] = useState([]);
 const [allproducts, setAllProducts] = useState([]);
 const [prods, setProds] = useState([]);

 const [admin, setAdmin] = useState();
 const { getAccessTokenSilently } = useAuth0();

 useEffect(() => {
   isAdmin(getAccessTokenSilently)
     .then((res) => setAdmin(res))
     .catch(() => setAdmin(false));
   dispatch(getCategories(""));  
 }, [admin]);

 useEffect(() => {
   axios
     .get(`/product/brand?category=${category ? category : ""}`)
     .then((response) => setAllBrands(response.data));
 }, [category]);

 useEffect(() => {
   if (!allbrands.find((brand) => brand === brands))
     setBrands("");
 }, [allbrands]);

 useEffect(() => {
   axios.get(`/product?cat=${category}&brand=${brands}`).then((response)=> setAllProducts(response.data.products));
 }, [dispatch, category, brands]);

 function validate(input){
  if(!input.event) errors.event = 'Enter a valid event name';
  else errors.event = '';
  
  if(input.discount <= 0 || input.discount > 100) errors.discount = 'Enter a valid discount percentage';
  else errors.discount = '';
  
  if(!input.startDay) errors.startDay = 'Enter a valid start date to apply the discount';
  else errors.startDay = '';

  if(!input.endDay) errors.endDay = 'Enter a valid end date to apply the discount';
  else errors.endDay = '';
  
  if(input.products.length === 0) errors.products = 'Enter the products to apply the discount';
  else errors.products = '';

  return errors
 }

 function handleChange(e) {
   e.preventDefault();
   setInput({
     ...input,
     [e.target.name]: e.target.value,
   });
   setErrors(
     validate({
       ...input,
       [e.target.name]: e.target.value,
     })
   );
 }

 function handleProducts(e) {
   setInput({
     ...input,
     products: [...input.products, e.target.id],
   });
   setErrors(
     validate({
       ...input,
       products: [...input.products, e.target.id],
     })
   );
   setProds([...prods, e.target.name]);
 }

 async function handleClick (e){
  e.preventDefault();
  try {
   const token = await getAccessTokenSilently();
   await axios.post("/offer", {products: input.products, offer: {event: input.event, startDay: input.startDay, endDay: input.endDay, discount: input.discount}}, {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   });
   toast.success("Offer created successfully");
  } catch (error) {
   toast.error("Error, please enter valid information");
  }
  setInput({
  event: '',
  discount: 0,
  startDay: '',
  endDay: '',
  products: []
 })
  history.push('/dashboard/offers')
 }

 function handleDelete(e){
  
 }

 return (
   <Transition>
   <div>
     <h1 className="text-center py-2  text-danger">Create an offer</h1>
     <Form className="w-75 mx-auto">
       <Form.Group className="mb-3" controlId="offerEvent">
         <Form.Label>Event Name</Form.Label>
         <Form.Control
           type="text"
           name="event"
           value={input.event}
           onChange={(e) => handleChange(e)}
           placeholder="Enter a event name"
         />
         {errors.event && (
           <Form.Text className="text-muted">{errors.event}</Form.Text>
         )}
       </Form.Group>
       <Form.Group className="mb-3" controlId="offerDiscount">
         <Form.Label>Discount</Form.Label>
         <Form.Control
           type="text"
           name="discount"
           value={input.discount}
           onChange={(e) => handleChange(e)}
           placeholder="Enter a discount percentage"
         />
         {errors.discount && (
           <Form.Text className="text-muted">{errors.discount}</Form.Text>
         )}
       </Form.Group>
       <Form.Group className="mb-3" controlId="offerStartDay">
         <Form.Label>Starts at</Form.Label>
         <Form.Control
           type="text"
           name="startDay"
           value={input.startDay}
           onChange={(e) => handleChange(e)}
           placeholder="Enter a start date"
         />
         {errors.startDay && (
           <Form.Text className="text-muted">{errors.startDay}</Form.Text>
         )}
       </Form.Group>
       <Form.Group className="mb-3" controlId="offerEndDay">
         <Form.Label>Ends at</Form.Label>
         <Form.Control
           type="text"
           name="endDay"
           value={input.endDay}
           onChange={(e) => handleChange(e)}
           placeholder="Enter an end date"
         />
         {errors.endDay && (
           <Form.Text className="text-muted">{errors.endDay}</Form.Text>
         )}
       </Form.Group>
       <Form.Group className="mb-3" controlId="offerProducts">
         <Form.Label>Products to apply discount</Form.Label>
         <Accordion>
           <Accordion.Item eventKey="0">
             <Accordion.Header>Categories</Accordion.Header>
             <Accordion.Body>
               <div className="row mx-1 my-1">
                 <div className="col-xl-12 col-md-6 col-sm-6 col-6 form-check">
                   <input
                     className="form-check-input"
                     type="radio"
                     name="category"
                     id="all"
                     onChange={(e) => {
                       setBrands("");
                     }}
                   />
                   <label
                     className="form-check-label fw-semibold"
                     htmlFor="all"
                   >
                     All
                   </label>
                 </div>
                 {categories.map((element) => {
                   return (
                     <div
                       key={element.id}
                       className="col-xl-12 col-md-6 col-sm-6 col-6 form-check"
                     >
                       <input
                         className="form-check-input"
                         type="radio"
                         name="category"
                         id={element.id}
                         onChange={() => {
                           setCategory(element.id);
                         }}
                       />
                       <label
                         className="form-check-label fw-semibold"
                         htmlFor={element.id}
                       >
                         {`${element.category[0].toUpperCase()}${element.category.slice(
                           1
                         )} `}
                       </label>
                     </div>
                   );
                 })}
               </div>
             </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="1">
             <Accordion.Header>Brands</Accordion.Header>
             <Accordion.Body>
               <div className="row mx-1 my-1">
                 <div className="col-xl-12 col-md-6 col-sm-6 col-6 form-check">
                   <input
                     className="form-check-input"
                     type="radio"
                     name="brand"
                     id="allBrands"
                     onChange={(e) => {
                       setBrands("");
                     }}
                   />
                   <label
                     className="form-check-label fw-semibold"
                     htmlFor="allBrands"
                   >
                     All
                   </label>
                 </div>
                 {allbrands &&
                   allbrands.map((b) => (
                     <div
                       key={b}
                       className="col-xl-12 col-md-6 col-sm-6 col-6 form-check"
                     >
                       <input
                         className="form-check-input"
                         type="radio"
                         name="brand"
                         id={b}
                         onChange={(e) => {
                           setBrands(e.target.id);
                         }}
                       />
                       <label
                         className="form-check-label fw-semibold"
                         htmlFor={b}
                       >
                         {b}
                       </label>
                     </div>
                   ))}
               </div>
             </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="2">
             <Accordion.Header>Products</Accordion.Header>
             <Accordion.Body>
               {allproducts &&
                 allproducts.map((e) => (
                   <div
                     key={e.id}
                     className="col-xl-12 col-md-6 col-sm-6 col-6 form-check"
                   >
                     <input
                       className="form-check-input"
                       type="radio"
                       name={e.name}
                       id={e.id}
                       value={input.products}
                       onChange={(e) => {
                         handleProducts(e);
                       }}
                     />
                     <label
                       className="form-check-label fw-semibold"
                       htmlFor={e.id}
                     >
                       {e.name}
                     </label>
                   </div>
                 ))}
             </Accordion.Body>
           </Accordion.Item>
         </Accordion>
       </Form.Group>
       <Form.Group className="mb-3" controlId="offerSelected">
         <Form.Label>Selected items:</Form.Label>
         <ul class="list-group list-group-flush">
           {prods &&
             prods.map((e) => (
               <li class="list-group-item">
                 <i>{e}</i>              
                 {/* <button
                   type="button"
                   onClick={() => handleDelete(e)}
                 >
                   Delete item
                 </button> */}
               </li>
             ))}
         </ul>
       </Form.Group>
       <Button
         variant="danger"
         type="submit"
         onClick={(e) => handleClick(e)}
         disabled={
           errors.event ||
           errors.discount ||
           errors.startDay ||
           errors.endDay ||
           errors.products
         }
       >
         Submit
       </Button>{" "}
       <ToastContainer />
     </Form>
   </div>
   </Transition>
 );
}
