import './App.css'
import styled from "styled-components";
import {StyledBtn, /*SuperButton*/} from "./components/Button.styled.tsx";
import {Link} from "./components/Link.styled.tsx";

// import {Menu} from "./components/Menu.styled.tsx";

function App() {

    return (
        <div>
            {/* <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>*/}
            <Box>
                {/*<StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>*/}
                {/*<StyledBtn as={"a"} href={"#"}>Link</StyledBtn>*/}
                {/*<SuperButton>Button2</SuperButton>*/}
                <StyledBtn color="red" fontSize="20px">Button</StyledBtn>
                <StyledBtn color="green">Button</StyledBtn>
                <StyledBtn>Button</StyledBtn>
            </Box>
        </div>
    )
}

export default App


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

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`


