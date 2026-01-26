import './App.css'
import styled from "styled-components";

function App() {

    return (
        <div>
            <Box>
                <StyledBtn>Button</StyledBtn>
            </Box>
        </div>
    )
}

export default App


const StyledBtn = styled.button`
    border: none;
    background-color: #ef319b;
    padding: 10px 20px;
    border-radius: 5px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

`

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`
