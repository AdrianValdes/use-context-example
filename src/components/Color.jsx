import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useColors } from '../color-hook';

export default function Color({ title, color, id }) {
  const { deleteColor } = useColors();
  return (
    <>
      <h1>{title}</h1>
      <div>
        <button onClick={() => deleteColor(id)}>
          <FaTrashAlt />
        </button>
        <div style={{ backgroundColor: color, height: '50px' }}></div>
      </div>
    </>
  );
}
