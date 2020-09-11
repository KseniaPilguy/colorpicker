import React, { useState } from 'react';
import ColorPicker from './ColorPicker';


function App() {

  let [value, setValue] = React.useState('#ff00e7');
  let [colors, setColors] = React.useState([
    { colorsName: 'red', colorsValue: '#ff0000', id: '1' },
    { colorsName: 'yellow', colorsValue: '#ffff00', id: '2' },
    { colorsName: 'green', colorsValue: '#008000', id: '3' },
    { colorsName: 'blue', colorsValue: '#0000ff', id: '4' }
  ])

  function onChange(color) {
    setValue(value = color)
  }

  return (
    <div className="wrapper">
      <ColorPicker colors={colors} onChange={onChange} value={value} />
    </div>
  );
}

export default App;
