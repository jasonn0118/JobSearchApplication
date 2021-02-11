import React, { useState, useEffect } from 'react'
import {Pagination} from 'react-bootstrap';

const PaginationPage = ({jobsPerPage, totalJobs, paginate, currentPage}) => {

    const pageNumbers = [];
    const [active, setActive] = useState(1);

    useEffect(() => {
        setActive(currentPage);
    },[currentPage])


    for(let i=1; i<=Math.ceil(totalJobs/jobsPerPage); i++){
        pageNumbers.push(
            <Pagination.Item key={i} active={i === active} onClick={()=>paginate(i)}>
                {i}
            </Pagination.Item>
        );
    };

    return (
        <div>
            <Pagination>{pageNumbers}</Pagination>
        </div>
    )
}

export default PaginationPage;
