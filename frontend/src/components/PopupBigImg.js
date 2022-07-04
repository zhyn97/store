import React from "react";

export default function PopupBigImg({ item, onBigImg }) {
  return (
    <div className="big-img">
      <div className="big-img__container">
        <img className="big-img__img" src={`./img/${item.img}`} onClick={onBigImg} alt={item.title}></img>
        <p className="big-img__title">{item.title}</p>
        <p className="big-img__description">{item.desc}</p>
      </div>
    </div>
  );
}
