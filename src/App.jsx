import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';
import { useState } from 'react';
import './App.css';

function App() {
  const [contentIndex, setContentIndex] = useState(0);
  const [products, setProducts] = useState([]);

  return (
    <>
      <Navigation setContentIndex={setContentIndex} />
      <Content contentIndex={contentIndex} />
    </>
  );
}

export default App;
