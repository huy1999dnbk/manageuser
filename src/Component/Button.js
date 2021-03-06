import styled from 'styled-components'

export const Button = styled.button`
    color:white;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 0.25em 0.5em;
    font-size:17px;
    font-weight:bold;
    margin-right:5px;
    background-color: ${props => props.SignUp ? 'green' : props.Update ? 'blue' : props.Edit ? 'blue' : 'red'};
    &:hover{
        color:black;
        background-color:white;
        border: 1px solid black;
    }
`
