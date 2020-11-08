import React from 'react';
import Search from '../Search/Search';
import { Select } from 'antd';

const { Option } = Select;

const Banner = (props) => {
    const { updateFavorite } = props;
    return (
        <div className="section-header--banner">
            <Search />
            <Select defaultValue="all" className="filter-dropdown" onChange={value => {updateFavorite(value)}}>
                <Option value="all">all</Option>
                <Option value="favorite">favorite</Option>
            </Select>
        </div>
    )
}

export default Banner;