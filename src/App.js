import { useState, useEffect } from 'react';

import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const  [ A, setA ] = useState('Завантаження ...');

  const getAxios = async () => {
    const res = await axios.get('https://swapi.dev/api/people/3/');
    setA(`Ім'я : ${res.data.name} Зріст : ${res.data.height} Вага : ${res.data.mass}`);  
  }

  useEffect(() => {
    getAxios();
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Інформація  про персонажа
        </p>
        <p>
          {A}
        </p>
      </header>
    </div>
  );
}

export default App;
