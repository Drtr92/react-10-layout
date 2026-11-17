import GlobalStyle from "./styles/GlobalStyle.ts";
import styled from "styled-components";

const Wrap = styled.div``;

const Head = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Wrap>
                <Head>

                </Head>
                <main>

                </main>
                <footer>

                </footer>
            </Wrap>
        </>
    );
}

export default App;
