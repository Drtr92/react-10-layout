import GlobalStyle from "./styles/GlobalStyle.ts";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const Wrap = styled.div`
    display: flex;
    min-height: 100dvh;
    flex-direction: column;
`;

/*
    이 아래는 Function 줄
*/

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Wrap>
                    <Header />
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/About"} element={<About />} />
                    </Routes>
                    <Footer />
                </Wrap>
            </BrowserRouter>
        </>
    );
}

export default App;
