import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { postProduct } from "../redux/Products/action";

const initialState = {
  image: "",
  price: "",
  brand: "",
  name: "",
  category: "",
  gender: "",
};
export const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProduct(product));
    console.log(product);
  };return (
    <DIV>
      <h1>ADD PRODUCT</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image"
          onChange={(e) => handleChange(e)}
          name="image"
          value={product.image}
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => handleChange(e)}
          name="price"
          value={product.price}
        />
        <input
          type="text"
          placeholder="Brand"
          onChange={(e) => handleChange(e)}
          name="brand"
          value={product.brand}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => handleChange(e)}
          name="name"
          value={product.name}
        />
        <select
          name="category"
          onChange={(e) => handleChange(e)}
          value={product.category}
        >
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="shoes">Shoes</option>
        </select>
        <select
          name="gender"
          onChange={(e) => handleChange(e)}
          value={product.gender}
        >
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Woman</option>
          <option value="kids">Kids</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  border: 2px solid grey;
  width: 500px;
  margin: auto;

  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  input {
    height: 40px;
    font-size: larger;
    width: 90%;
  }
  select {
    height: 40px;
    font-size: larger;
    width: 90%;
  }
  button {
    width: 50%;
    height: 35px;
    cursor: pointer;
    border: none;
  }
`;
