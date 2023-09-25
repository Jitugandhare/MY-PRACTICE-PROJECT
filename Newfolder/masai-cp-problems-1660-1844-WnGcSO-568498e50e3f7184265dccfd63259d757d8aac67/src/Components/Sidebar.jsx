import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialCategory = searchParams.getAll("category");
  let initialType = searchParams.getAll("type");
  let initialOrder = searchParams.getAll("order");
  const [category, setCategory] = useState(initialCategory || []);
  const [type, setType] = useState(initialType || []);
  const [order, setOrder] = useState(initialOrder || []);


  useEffect(() => {
    let params = {
    category,type,
    }
    order && (params.order = order)
    setSearchParams(params)
},[category,type,order])


  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };
  const handleType = (e) => {
    const { value } = e.target;
    let newType = [...category];
    if (newType.includes(value)) {
      newType = newType.filter((el) => el !== value);
    } else {
      newType.push(value);
    }
    setType(newType);
  };
  const handleOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input
          data-testid="recipe-indian"
          type="checkbox"
          value={"recipe-indian"}
          onChange={handleCategory}
          checked={initialCategory.includes("recipe-indian")}
        />
        <label>Indian</label>
        <br />
        <br />
        <input
          data-testid="recipe-italian"
          type="checkbox"
          value={"recipe-italian"}
          onChange={handleCategory}
          checked={initialCategory.includes("recipe-italian")}
        />
        <label>Italian</label>
        <br />
        <br />
        <input
          data-testid="recipe-chinese"
          type="checkbox"
          value={"recipe-chinese"}
          onChange={handleCategory}
          checked={initialCategory.includes("recipe-chinese")}
        />
        <label>Chinese</label>
        <br />
        <br />
        <input
          data-testid="recipe-thai"
          type="checkbox"
          value={"recipe-thai"}
          onChange={handleCategory}
          checked={initialCategory.includes("recipe-thai")}
        />
        <label>Thai</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Veg / Non-Veg</h3>
      <div>
        <input
          data-testid="recipe-veg"
          type="checkbox"
          value={"recipe-veg"}
          onChange={handleType}
          checked={type.includes("recipe-veg")}
        />
        <label>Veg</label>
        <br />
        <br />
        <input
          data-testid="recipe-non-veg"
          type="checkbox"
          value={"recipe-non-veg"}
          onChange={handleType}
          checked={type.includes("recipe-non-veg")}
        />
        <label>Non Veg</label>
      </div>
      <br />
      <br />
      <br />
      <h3>Sort By Price</h3>
      <div>
        <input
          data-testid="recipe-sort-asc"
          type="radio"
          name="sort"
          value={"asc"}
          onChange={handleOrder}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="recipe-sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={handleOrder}
          defaultChecked={order === "dec"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 13%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;
  box-shadow: 2px 2px 2px gray;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
