import React, {useEffect, useState} from 'react';
import Search from "./Search";
import {MySelect} from "./MySelect";
import styled from "styled-components";

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

function Controls({onSearch}) {
    const [searchText, setSearchText] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region ? region.value : '';
        onSearch(searchText, regionValue)
        //eslint-disable-next-line
    }, [searchText, region])

    return (
        <div>
            <Wrapper>
                <Search searchText={searchText} setSearchText={setSearchText}/>
                <MySelect
                    options={options}
                    placeholder='Filter by region'
                    isClearable
                    isSearchable={false}
                    value={region}
                    onChange={setRegion}
                />
            </Wrapper>

        </div>
    );
}

export default Controls;