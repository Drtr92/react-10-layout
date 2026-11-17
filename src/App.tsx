import GlobalStyle from "./styles/GlobalStyle.ts";
import { RouterProvider } from "react-router";
import AppRouter from "./router/AppRouter.tsx";

/*
    이 아래는 Function 줄  // P.S : Provider는 제공자 라는 뜻이다.
*/

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={AppRouter()} />
        </>
    );
}

export default App;
