import React, { useState } from 'react';
import { Input, Select } from 'antd';
import { useDispatch } from 'react-redux';

import { searchSuperHero } from '../../redux/actions/action';
import '../../asset/sass/components/search.scss';

const { Option } = Select;

function Search() {
    const dispatch = useDispatch();

    const [typeSearch, setTypeSearch] = useState('name');

    const onSearchHandler = (value) => {
        dispatch(searchSuperHero({value, type: typeSearch}));
    }

    return (
        <div className="section-search">
            <Input.Group compact>
                <Select defaultValue={typeSearch} className="section-search--select" size="large" onChange={(value) => setTypeSearch(value)}>
                    <Option value="id">id</Option>
                    <Option value="name">name</Option>
                </Select>
                <Input.Search className="section-search--input" onSearch={onSearchHandler} size="large" v/>
            </Input.Group>
        </div>
    );
}

export default Search;