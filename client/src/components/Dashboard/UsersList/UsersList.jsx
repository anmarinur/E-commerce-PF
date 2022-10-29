import React, {useState, useEffect} from "react";
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react'
import ReactPaginate from 'react-paginate';
import UsersCard from './UsersCard';



const GetAllUsers = () =>{
    const { getAccessTokenSilently } = useAuth0();
    const [page, setPage] = useState("0");
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);

    async function getUsersFromDb (page, search){
        try {
            const token = await getAccessTokenSilently()
            const result = await axios.get(`/user?page=${page}&search=${search}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTotalPages(result.data.totalPages)
            setUsers(result.data.users)
        } catch (error) {
            console.log("getAllOrders Error:", error)
        }
    }

    useEffect(()=>{
        getUsersFromDb(page, search)
    },[page, search])


    const handlePageClick = (event) => {
        setPage(event.selected)
    };

    
    


    return(
        <div>
            <input className="form-control mt-2 mb-2 bg-light w-25" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search by Email" aria-label="Search" />
            <table className="table align-middle table-hover">
                <thead>
                    <tr>
                        <th scope="col" className="col-1">ID</th>
                        <th scope="col" className="col-1">Image</th>
                        <th scope="col" className="col-1 ps-4">Name</th>
                        <th scope="col" className="col-2">Email</th>
                        <th scope="col" className="col-1">Phone</th>
                        <th scope="col" className="col-1">Is Blocked</th>
                        <th scope="col" className="col-1">Block/Unblock</th>
                        <th scope="col" className="col-2">See orders</th>                    
                        
                    </tr>
                </thead>
                <tbody>
                    {users.length !== 0 ? users.map(user =>
                                                <UsersCard key={user.id} user={user}/>
                                        ) : <tr className='text-danger'><th>Users not Found</th></tr>
                                        }
                </tbody>
            </table>
            
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
                : null }
            </nav>
        </div>
    )
}

export default GetAllUsers