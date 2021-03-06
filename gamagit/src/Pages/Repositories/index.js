import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Title, Container, List, ListItem, LinkHome } from './styled';

export default function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        let [repositoriesName, setRepositories] = localStorage.getItem('repositoriesName');

        if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/')
        }

    }, [])
    return (

        <Container>

            <Title>Repositórios</Title>
            <List>
                {repositories.map(repository => {
                    return (
                        <ListItem>{repository}</ListItem>
                    )
                })}

            </List>

            <LinkHome to='/'></LinkHome>

        </Container>


    )
}