
import { useState } from 'react';
import './App.css';

function App(props) {

  const [usuario, setUsuario] = useState('Taka')
  return (
    <div className="App">
      <header className="App-header">

        <h1>{props.title}, {usuario}!</h1>
        <input name='usuario' id='usuario' className='usuarioInput' placeholder='Usuário' />
        <button type='button'>Pesquisar</button>
      </header>
    </div>
  );
}

export default App;
