import React, { createContext, useContext, useState } from 'react';
import colors from './color-data.json';
import { v4 as uuidv4 } from 'uuid';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

function ColorProvider({ children }) {
  const [data, setData] = useState(colors);

  const addColor = ({ title, color }) => {
    const newArray = [...data, { title, color, id: uuidv4() }];
    setData(newArray);
  };

  const deleteColor = (id) => setData(data.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ data, deleteColor, addColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export default ColorProvider;
