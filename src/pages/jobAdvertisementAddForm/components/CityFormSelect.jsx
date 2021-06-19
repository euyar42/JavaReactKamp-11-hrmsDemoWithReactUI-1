import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import CityService from "../../../services/cityService";

export default function CityFormSelect({ handleChange, onBlur, value, error }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  let cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.name,
    value: city.id,
  }));

  return (
    <Form.Select
      id="cityId"
      name="cityId"
      label="City"
      placeholder="KARAMAN"
      width={4}
      search
      selection
      options={cityOptions}
      onChange={(event, data) => handleChange(data.value, "city.id")}
      onBlur={onBlur}
      value={value}
      error={error}
    />
  );
}