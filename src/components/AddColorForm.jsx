import React, { useState } from 'react';
import { useColors } from '../color-hook';

export default function AddColorForm() {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');

  const { addColor } = useColors();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ title, color });
    setTitle('');
    setColor('#000000');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleTitle} placeholder="add a color" />
        <input value={color} onChange={handleColor} type="color" />
      </form>
    </div>
  );
}
