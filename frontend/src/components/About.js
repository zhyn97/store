import React from 'react';
import dogCoin from '../img/dogCoin.png';

export default function About() {
  return (
    <div className='about'>
      <h2 className='about__title'>There could have been a description here, but I'm too lazy to write it :D</h2>
      <img className='about__img' alt='dog' src={dogCoin}></img>
    </div>
  )
}
