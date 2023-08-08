import React, { Suspense, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const loadComponent = () => {
  console.log('loading component...');
  return import('./lazy-component');
};

const LazyComponent = React.lazy(loadComponent);

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Olá</p>
        <button
          onMouseOver={() => loadComponent}
          onClick={() => setShow((s) => !s)}
        >
          Show: {show ? ' LC on screen' : 'LC off screen'}{' '}
        </button>
        <Suspense fallback={<h3>Loading Lazy Component...!</h3>}>
          {show && <LazyComponent />}
        </Suspense>
      </div>
    </>
  );
}

export default App;
