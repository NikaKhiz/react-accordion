import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {

  // const [index, setIndex] = id;
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  }
  return (
    <section className='question'>
      <header >
        <h4>
          {title}
        </h4>
        <button type="button" className='btn' onClick={handleClick}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
      {
        showInfo ? <p>{info}</p> : ''
      }
    </section>
  );
};

export default Question;
