import './App.css'
import styled from "styled-components";

function App() {

    return (
        <div>
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
                <StyledBtn as={"a"} href={"#"}>Link</StyledBtn>
                <StyledBtn>Button</StyledBtn>
                <SuperButton>Button2</SuperButton>
            </Box>
        </div>
    )
}

export default App


const StyledBtn = styled.button`
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

const Link = styled.a`
    color: #328eca;
    font-size: 2rem;
    font-weight: bold;
    background-color: transparent;

`

const SuperButton=styled(StyledBtn)`
    border-radius: 5px;
    background-color: #f4f002;
    color: #434040;
`

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }
`

const Menu=styled.nav `
    ul{
        list-style: none;
        padding: 0;
    }
`
