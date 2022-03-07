import '../css/App.css';
import React from 'react';
import Manga from './MangaFetch';

function App() {
  return (
    <div className="bg-red-500">
      The blue sky
      <div>
        <Manga />
      </div>
    </div>
  );
}

export default App;
