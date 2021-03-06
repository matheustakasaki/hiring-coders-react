import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex; 
    align-items:center;
    justify-content:center;
    flex-direction: column;
`

export const Input = styled.input`
    border:1px solid #ddd ;
    height: 2rem ;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,&:active{
        outline:none ;
        box-shadow:none ;
    }
`

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background-color:#000 ;
    color: #fff;
    border-radius: 0 .25rem .25rem 0%;
    &:focus,&:active{
        outline:none ;
        box-shadow:none ;
    }
`

export const ErrorMessage = styled.span`
    display:block;
    font-size: .65rem;
    color:red;
    font-weight: 600;
`