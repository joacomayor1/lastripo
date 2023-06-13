import React from 'react';
import Hola from './hola';

function ButtonComponent(propsFromParent) {
  const text = propsFromParent.text;

  return (
    <button
      className={`btn btn-${propsFromParent.className ?? 'success'} btn-block`}
      onClick={() => propsFromParent.click(text)}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
