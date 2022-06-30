import styled from 'styled-components'

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;

    margin: 0 auto;
`
export const Title = styled.h1`
    color:#333;
    font-size: 2em;
    text-align: center;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem 0;
    background-color: #000;

    color: #fff;
    padding: .5rem;
`

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    color: white;
    text-align: center;
    background-color: #000;
    margin: 2rem auto;
    padding: .5rem 0;
    text-decoration: none;
`