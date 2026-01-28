import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations.ts";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    // primary?: boolean
    // outlined?: boolean
    btnType?: "primary" | "outlined"
    active?: boolean
}


export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    //background-color: #ef319b;
        //background-color: ${props => props.color || "#ef319b"};
    padding: 10px 20px;
    //color: snow;
    //font-size: 2rem;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;

    /*&:last-child {
        background-color: #d240ec;
    }*/

    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#ef319b"};
        color: ${props => props.color || "#ef319b"};
        background-color: transparent;

        &:hover {
            border-color: #0f6aac;
            color: #0f6aac;
            background-color: transparent;
        }
    `}

    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#ef319b"};
        color: snow;

        &:hover {
            background-color: #0f6aac;
        }
    `}
    ${props=>props.active && css<StyledBtnPropsType>`
        box-shadow: 5px 5px 5px 5px rgba(22, 49, 67, 0.69);
    `}

`

export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #f4f002;
    color: #434040;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out;
    }
`