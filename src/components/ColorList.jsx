import React from 'react';
import Color from './Color';
import { useColors } from '../color-hook';

export default function ColorList() {
  const { data } = useColors();

  return (
    <ul>
      {data.map((color) => (
        <li>
          <Color {...color} key={color.id} />
        </li>
      ))}
    </ul>
  );
}
