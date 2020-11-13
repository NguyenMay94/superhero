import React from "react";
import Search from "../Search/Search";
import { Select } from "antd";

const { Option } = Select;

const Banner = (props) => {
  const { updateFilter, onSearchSuperHero, typeSearch, textSearch } = props;
  return (
    <div className="section-header--banner">
      <Search
        onSearchSuperHero={onSearchSuperHero}
        typeSearch={typeSearch}
        textSearch={textSearch}
      />
      <Select
        defaultValue="all"
        className="filter-dropdown"
        onChange={(value) => {
          updateFilter(value);
        }}
      >
        <Option value="all">all</Option>
        <Option value="favorite">favorite</Option>
      </Select>
    </div>
  );
};

export default Banner;
