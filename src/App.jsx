import { useState } from 'react';
import CookieSelector from './components/CookieSelector';
import QuoteModal from './components/QuoteModal';
import data from './data/data.json';

function App() {
  const [content, setContent] = useState('');
  const [type, setType] = useState('');
  const [open, setOpen] = useState(false);

  const handleSelect = (cookieType) => {
    const list = data[cookieType];
    if (!list) return;
    const random = list[Math.floor(Math.random() * list.length)];
    setContent(random);
    setType(cookieType);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div style={{ textAlign: 'center', padding: 50, backgroundColor: '#FFF5BA', minHeight: '100vh' }}>
      <h1 style={{ fontFamily: 'Quicksand', color: '#FF69B4' }}>🍪 Bite-of-Bliss 🍪</h1>
      <CookieSelector onSelect={handleSelect} />
      <QuoteModal open={open} handleClose={handleClose} content={content} type={type} />
    </div>
  );
}

export default App;
