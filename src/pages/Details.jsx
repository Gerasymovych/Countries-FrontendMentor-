import React from 'react';
import {useParams} from 'react-router-dom'

const Details = () => {
    let {name} = useParams();
    return (
        <div>
            Details: {name}
        </div>
    );
};

export default Details;