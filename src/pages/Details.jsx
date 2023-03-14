import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from "axios";
import {useState, useEffect} from "react";
import {IoArrowBack} from "react-icons/io5";
import {searchByCountry} from "../config";
import {Button} from "../components/Button";
import Info from "../components/Info";

const Details = () => {
    let {name} = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        )
    })

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {country && <Info {...country}/>}
        </div>
    );
};

export default Details;