import React from "react";
import leopard from "../img/leopard.png"
import cat from "../img/cat.png"
import bear from "../img/bear.png"


export default function Features() {
  return (
    <div className="features">
      <p className="features__text">Features</p>
      <h2 className="features__title">A brief description of our advantages</h2>
      <div className="features__collection">
        <div className="features__item">
            <img className="features__img" alt="leopard" src={leopard}></img>
            <p className="features__item-title">Fast</p>
            <p className="features__description">We care about your time, so we deliver your order right to your door within 3 days.</p>
        </div>
        <div className="features__item">
            <img className="features__img" alt="leopard" src={bear}></img>
            <p className="features__item-title">Reliably</p>
            <p className="features__description">Our furniture is famous for its quality, because only the best components are selected for its production.</p>
        </div>
        <div className="features__item">
            <img className="features__img" alt="leopard" src={cat}></img>
            <p className="features__item-title">Cosy</p>
            <p className="features__description">Good furniture should give a sense of comfort to its owners and we do just that.</p>
        </div>
      </div>
    </div>
  );
}
