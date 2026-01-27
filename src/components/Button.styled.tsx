import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations.ts";

export const StyledBtn = styled.button`
    border: none;
    background-color: #ef319b;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #700241;
    }

    &:last-child {
        background-color: #d240ec;
    }
`

export const SuperButton=styled(StyledBtn)`
    border-radius: 5px;
    background-color: #f4f002;
    color: #434040;
    &:hover {
        animation: ${MyAnimation} 2s ease-in-out;
    }
`