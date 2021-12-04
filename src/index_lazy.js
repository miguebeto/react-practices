import React from 'react';
import ReactDOM from 'react-dom';
import { useState, Suspense } from 'react';

const Surprise = React.lazy(() => import('./Surprise'));

const App = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div>
      <button onClick={() => setShowSurprise(true)}>Mostrar Sorpresa</button>
      <button onClick={() => setShowSurprise(false)}>Ocultar Sorpresa</button>
      {showSurprise && (
        <Suspense fallback={<p>Cargando....</p>}>
          <Surprise />
        </Suspense>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
