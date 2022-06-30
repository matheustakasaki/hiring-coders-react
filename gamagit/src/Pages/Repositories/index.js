import React, { useEffect, useState } from 'react';
import { Title, Container, List, ListItem } from './styled';


export default function Repositories() {

    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        let [repositoriesName, setRepositories] = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);

        setRepositories(repositoriesName);
        localStorage.clear();

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

        </Container>


    )
}