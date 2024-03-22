import React from 'react';
import ReactDOM from 'react-dom';
import WorldClocksApp from './WorldClocksApp'; 

const App = () => {
  return (
    <div>
      <h1>Мировые Часы</h1>
      <WorldClocksApp />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
