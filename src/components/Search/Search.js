import React, { useState } from "react";
import { Input, Select } from "antd";
import { useDispatch } from "react-redux";

import { searchSuperHero } from "../../redux/actions/action";
import "../../asset/sass/components/search.scss";

const { Option } = Select;

function Search(props) {
  const { onSearchSuperHero, typeSearch, textSearch, updateTypeSearch } = props;

  return (
    <div className="section-search">
      <Input.Group compact>
        <Select
          defaultValue={typeSearch}
          className="section-search--select"
          size="large"
          onChange={(value) => updateTypeSearch(value)}
        >
          <Option value="id">id</Option>
          <Option value="name">name</Option>
        </Select>
        <Input.Search
          className="section-search--input"
          defaultValue={textSearch}
          onSearch={(value) => onSearchSuperHero(value)}
          size="large"
        />
      </Input.Group>
    </div>
  );
}

export default Search;
