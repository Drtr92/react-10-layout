import styled from "styled-components";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Outlet } from "react-router";

const Wrap = styled.div`
    display: flex;
    min-height: 100dvh;
    flex-direction: column;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;

function MainLayout() {
    // outlet
    // 이 자리에 Routes의 내용이 들어올 자리라는걸 표현하는 기능
    return (
        <Wrap>
            <Header />
            <Outlet />
            <Footer />
        </Wrap>
    );

}

export default MainLayout;