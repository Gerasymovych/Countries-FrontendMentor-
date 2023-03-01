import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ALL_COUNTRIES} from "../config";
import Controls from "../components/Controls";
import List from "../components/List";
import {Card} from "../components/Card";
import {useNavigate} from "react-router-dom"


const HomePage = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const handleSearch = (textSearch, region) => {
        let data = [...countries];
        if (region !== '') {
            data = data.filter(c => c.region.includes(region))
        }

        if (textSearch !== "") {
            data = data.filter(c => c.name.toLowerCase().includes(textSearch.toLowerCase()))
        }
        setFilteredCountries(data);
    }

    const navigate = useNavigate();

    useEffect(() => {
            axios.get(ALL_COUNTRIES).then(
                ({data}) => {
                    setCountries(data);
                })
    }, []);

    useEffect(() => {
        setFilteredCountries(countries)
    }, [countries])

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {console.log(`filteredCountries ${filteredCountries.length}`)}
                {filteredCountries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: c.region
                            },
                            {
                                title: 'Capital',
                                description: c.capital
                            }
                        ]
                    };
                    return <Card key={c.name}
                                 onClick={() => navigate(`country/${c.name}`)}
                                 {...countryInfo}/>;
                })}
            </List>
        </>
    );
};

export default HomePage;