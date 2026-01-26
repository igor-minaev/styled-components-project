import './App.css'
import styled from "styled-components";

function App() {

    return (
        <div>
            <Box>
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

`
