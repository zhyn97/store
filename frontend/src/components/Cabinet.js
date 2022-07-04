import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function Cabinet({ addProducts }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [img, setImg] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState("");

  function clear() {
    setTitle("");
    setImg("");
    setDesc("");
    setCategory("");
    setPrice("");
  }

  return isAuth ? (
    <div>
      <p>add new product</p>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="img"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="desc"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="category"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
        <button onClick={() => {
          addProducts(title, img, desc, category, price);
          clear();
          }}>Add new place</button>
    </div>
  ) : (
    navigate("/")
  );
}
