import React, { useState } from "react";
import { Input, Select } from "antd";
import "../../asset/sass/components/search.scss";

const { Option } = Select;

function Search(props) {
  const { onSearchSuperHero, typeSearch, textSearch } = props;
  const [type, setType] = useState(typeSearch);

  return (
    <div className="section-search">
      <Input.Group compact>
        <Select
          defaultValue={type}
          className="section-search--select"
          size="large"
          onChange={(value) => setType(value)}
        >
          <Option value="id">id</Option>
          <Option value="name">name</Option>
        </Select>
        <Input.Search
          className="section-search--input"
          defaultValue={textSearch}
          onSearch={(value) => onSearchSuperHero(value, type)}
          size="large"
        />
      </Input.Group>
    </div>
  );
}

export default Search;
