import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialCategory = searchParams.getAll("category");
  let initialtype = searchParams.getAll("type");
  let initialSort = searchParams.get("sort");
  const [category, setCategory] = useState(initialCategory || []);
  const [type, setGender] = useState(initialtype || []);
  const [sort, setSort] = useState(initialSort || "");

  useEffect(() => {
    let params = {
      sort,
      category,
    };

    sort && (params.sort = sort);

    setSearchParams(params);
  }, [category, type, sort]);

  const handleCategory = (e) => {
    const { value } = e.target;
    //  setCategory(prev=>[...prev,value]);
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handletype = (e) => {
    const { value } = e.target;
    let newtype = [...type];
    if (newtype.includes(value)) {
      newtype = newtype.filter((el) => el !== value);
    } else {
      newtype.push(value);
    }
    setGender(type);
  };

  const handleSort = (e) => {
    const { value } = e.target;
    setSort(value);
  };

  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input
          onChange={handleCategory}
          data-testid="recipe-indian"
          type="checkbox"
          value={"indian"}
          checked={category.includes("indian")}
        />
        <label>Indian</label>
        <br />
        <br />
        <input
          onChange={handleCategory}
          data-testid="recipe-italian"
          type="checkbox"
          value={"italian"}
          checked={category.includes("italian")}
        />
        <label>Italian</label>
        <br />
        <br />
        <input
          onChange={handleCategory}
          data-testid="recipe-chinese"
          type="checkbox"
          value={"chinese"}
          checked={category.includes("chinese")}
        />
        <label>Chinese</label>
        <br />
        <br />
        <input
          onChange={handleCategory}
          data-testid="recipe-thai"
          type="checkbox"
          value={"thai"}
          checked={category.includes("thai")}
        />
        <label>Thai</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Veg / Non-Veg</h3>
      <div>
        <input
          onChange={handletype}
          data-testid="recipe-veg"
          type="checkbox"
          value={"veg"}
          checked={type.includes("veg")}
        />
        <label>Veg</label>
        <br />
        <br />
        <input
          onChange={handletype}
          data-testid="recipe-non-veg"
          type="checkbox"
          value={"non-veg"}
          checked={type.includes("non-veg")}
        />
        <label>Non Veg</label>
      </div>
      <br />
      <br />
      <br />
      <h3>Sort By Price</h3>
      <div onChange={handleSort}>
        <input
          data-testid="recipe-sort-asc"
          type="radio"
          name="sort"
          value={"asc"}
          defaultChecked={sort === "asc"}
        />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="recipe-sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          defaultChecked={sort === "desc"}
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
