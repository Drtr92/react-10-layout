import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${props => props.theme.color.text};
    }
    
    a {
        color: inherit;     // inherit : 부모 색상을 물려받는다.
        text-decoration: none;
    }
`;

export default GlobalStyle;