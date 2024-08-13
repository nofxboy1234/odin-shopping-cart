import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';
import { useState } from 'react';

function App() {
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <>
      <Navigation setContentIndex={setContentIndex} />
      <Content contentIndex={contentIndex} />
    </>
  );
}

export default App;
