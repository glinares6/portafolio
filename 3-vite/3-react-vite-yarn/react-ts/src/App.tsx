import { useState } from 'react';
import { SizeSelector } from './components/SizeSelector';
import './App.css';

function App() {
  
  const [currentSize,setcurrentSize] = useState('none');

  return (
    <div className="App App-header">
      <h1>talla seleccionada: { currentSize } </h1>
    <SizeSelector  
      selectedSize={ currentSize }
      // onSizeChange={ (size) => setcurrentSize( size )}
      onSizeChange={ setcurrentSize}
    />
    </div>
  )
}

export default App
