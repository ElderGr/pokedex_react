import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { JumbotronFilters, JumbotonItens } from '../components/jumbotron/jumbotron';

function App() {
  return (
    <div className="container"> 
      <JumbotronFilters />
      <JumbotonItens />
    </div>
  );
}

export default App;
