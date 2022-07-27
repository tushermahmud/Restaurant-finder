import React from "react";
import { AutoComplete } from "antd";
const { Option } = AutoComplete;

interface IProps {
  searchResults: any;
  handleChange: any;
  handleSelect:any;
}

const LocationAutocomplete: React.FC<IProps> = ({handleChange, handleSelect, searchResults}) => {
    const children = searchResults.map((option: any) => (
      <Option
        key={option.title}
        value={`${option.title},${option.address.label}`}
      >
        {`${option.title},${option.address.label}`}
      </Option>
    ));
  return (
    <AutoComplete
      onSelect={handleSelect}
      style={{ width: "100%" }}
      onSearch={handleChange}
      placeholder="Find Restaurants"
    >
      {children}
    </AutoComplete>
  );
};

export default LocationAutocomplete;