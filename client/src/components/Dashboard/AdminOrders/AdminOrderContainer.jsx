import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import ReactPaginate from 'react-paginate';
import AdminOrderCard from './AdminOrderCard';


const AdminOrderContainer = () => {


    const { getAccessTokenSilently } = useAuth0()
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0)
    const [orders, setOrders]=useState([])
    const availableStatus =["created", "pending", "in process", "delivered", "received", "cancelled"]


    
    async function getAllOrders(page){
        const token = await getAccessTokenSilently()
        try {
            const result = await axios.get(`/order?size=12&page=${page}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setOrders(result.data.orders)
            setTotalPages(result.data.totalPages)
        } catch (error) {
            console.log("getAllOrders Error:", error)
        }
    }



    useEffect(() =>{ 
        getAllOrders(page)
    },[page])

    const handlePageClick = (event) => {
        setPage(event.selected)
    };



    async function updateStatus(e, id){
        const token = await getAccessTokenSilently()
        const body = { "updateStatus": e.target.value}
        try {
            await axios.put(`/order/${id}`, body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log("Error update status:", error)
        }
    }




    return (
        <>
            <div className='container  p-2 mt-4'>
                <div className='row justify-content-around'>
                    <select class="form-select mb-4 w-25">
                        <option selected>Order By</option>
                        <option value="ASC">Older</option>
                        <option value="DESC">Recent</option>
                    </select>
                    <select class="form-select mb-4 w-25">
                        <option selected>Filter By Status</option>
                        <option value="received">received</option>
                        <option value="in process">in process</option>
                        <option value="sent">sent</option>
                        <option value="delivered">delivered</option>
                        <option value="cancelled">cancelled</option>
                    </select>
                </div>
                <div className="row">
                    {/* <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Client Email</th>
                                <th scope="col">Total</th>
                                <th scope="col">Status</th>
                                <th scope="col">Address</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length !== 0 ? orders.map(order =>
                                    <tr key={order.id}>
                                        <th scope="row">{order.id}</th>
                                            <td>{order.user_email}</td>
                                            <td>{order.total_payment}</td>
                                            <td>
                                                <select onChange={(e)=> updateStatus(e, order.id)} class="form-select mb-4 w-50">
                                                    <option selected>{order.status}</option>
                                                    {availableStatus.map(status=> !(status == order.status) ?
                                                    <option value={status}>{status}</option> : null
                                                        )}
                                                </select>
                                            </td>
                                            <td>{order.shipping_address}</td>
                                            <td>{new Date(order.createdAt).toLocaleString()}</td>
                                    </tr>
                                ) : <p>Orders not Found</p>
                                }
                        </tbody>
                    </table> */}
                    {orders.length !== 0 ? orders.map(order =>
                            <AdminOrderCard availableStatus={availableStatus}  updateStatus={updateStatus} order={order} />
                    ) : <p>Orders not Found</p>
                    }
                    
                    <nav aria-label="navigation">
                    { totalPages !==0 ?
                        <ReactPaginate
                        breakLabel=" . . ."
                        breakLinkClassName='page-link'
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={totalPages}
                        previousLabel="<"
                        renderOnZeroPageCount={1}
                        className="pagination justify-content-center"
                        pageClassName="page-item "
                        pageLinkClassName="page-link "
                        activeClassName="active"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                    />  
                    : ( <> Order not Found </>)} 
                    
                    </nav>
                </div>
            </div>

        </>
    )
}
export default AdminOrderContainer;