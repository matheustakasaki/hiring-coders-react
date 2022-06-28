
import { useState } from 'react';
import './App.css';
import axios from 'axios'

function Home(props) {

  const [usuario, setUsuario] = useState('')
  function handlePesquisa() {

    axios.get(`https://api.github.com/users/${usuario}/repos`).then(res => console.log(res.data))
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>{props.title}, {usuario}!</h1>
        <input className='usuarioInput' placeholder='Usuário' value={usuario} onChange={e => setUsuario(e.target.value)} />
        <button type='button' onClick={handlePesquisa}>Pesquisar</button>
      </header>
    </div>
  );
}

export default Home;
