import Pagination from 'react-bootstrap/Pagination';


function PaginationProducts(props) {
    const numberPages = [];
    for (let i=1; i <= props.totalPages; i++){
        numberPages.push(i);
    }
    if (props.currentPage > props.totalPages) props.setPagePagination (0)

    return (
      <Pagination className='justify-content-center' >
        <Pagination.First   onClick={() => props.setPagePagination (0)} />
        <Pagination.Prev  disabled />
        {numberPages.map( n =>(
            n === props.currentPage ? 
            (<Pagination.Item key={n} active onClick={() => props.setPagePagination (n-1)} >{n}</Pagination.Item>) : 
            (<Pagination.Item key={n}  onClick={() => props.setPagePagination (n-1)} >{n}</Pagination.Item>) 
        ))}
        
        <Pagination.Next disabled />
        <Pagination.Last onClick={() => props.setPagePagination (props.totalPages-1)} />
      </Pagination>
    );
  }
  
  export default PaginationProducts;