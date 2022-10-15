import Pagination from 'react-bootstrap/Pagination';


function PaginationProducts(props) {


    const numberPages = [];

    for (let i=1; i <= props.totalPages; i++){
        numberPages.push(i);
    }

    return (
      <Pagination className='' >
        <Pagination.First />
        <Pagination.Prev />

        {numberPages.map( n => (
                    <Pagination.Item onClick={() => props.setPagePagination (n-1)} >{n}</Pagination.Item>
        ))}
        
        
  
        
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    );
  }
  
  export default PaginationProducts;