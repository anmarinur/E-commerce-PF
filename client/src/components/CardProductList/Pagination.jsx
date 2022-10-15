import Pagination from 'react-bootstrap/Pagination';


function PaginationProducts(props) {


    const numberPages = [];

    for (let i=1; i <= props.totalPages; i++){
        numberPages.push(i);
    }

    return (
      <Pagination className='' >
        <Pagination.First onClick={() => props.setPagePagination (0)} />
        <Pagination.Prev disabled />
        {numberPages.map( n =>(
            n === props.currentPage ? 
            (<Pagination.Item active onClick={() => props.setPagePagination (n-1)} >{n}</Pagination.Item>) : 
            (<Pagination.Item onClick={() => props.setPagePagination (n-1)} >{n}</Pagination.Item>) 
        ))}
        
        <Pagination.Next disabled />
        <Pagination.Last onClick={() => props.setPagePagination (props.totalPages-1)} />
      </Pagination>
    );
  }
  
  export default PaginationProducts;