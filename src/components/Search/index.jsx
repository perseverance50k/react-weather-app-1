import "./index.css";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { geoDbApi } from "../../api";

// eslint-disable-next-line react/prop-types
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const onChangeHandler = async (searchData) => {
    setSearch(searchData);
    await onSearchChange(searchData);
  };

  const loadOptions = async (cityNamePrefix) => {
    const cities = await geoDbApi.getCities(cityNamePrefix);
    const formattedOptions = {
      options: cities.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.country}`,
        };
      }),
    };

    return formattedOptions;
  };

  return (
    <AsyncPaginate
      placeholder="Search for a city..."
      debounceTimeout={600}
      value={search}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
