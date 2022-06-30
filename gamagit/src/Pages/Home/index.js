
import React, { useState } from 'react';
import '../../App.css'
import axios from 'axios'
import { Input, Button, Container } from './styled';
import { useHistory } from 'react-router-dom'


function Home(props) {

  const history = useHistory();
  const [usuario, setUsuario] = useState('');

  function handlePesquisa() {

    axios.get(`https://api.github.com/users/${usuario}/repos`).then(res => {
      const repositories = res.data;

      const repositoriesName = []

      repositories.map((item) => {
        repositoriesName.push(item.name);
      });
      localStorage.setItem('repositoriesName:', JSON.stringify(repositoriesName))

      history.push('/repositories')

    })
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Container>

            <h1>{props.title}, {usuario}!</h1>
            <Input className='usuarioInput' placeholder='Usuário' value={usuario} onChange={e => setUsuario(e.target.value)} />
            <Button type='button' onClick={handlePesquisa}>Pesquisar</Button>

          </Container>
        </header>
      </div>
    </>
  );
}

export default Home;
