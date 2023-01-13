import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.color['green-300']};
    
  }

  body {
    background-color: ${(props) => props.theme.color['gray-800']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem Roboto, sans-serif;
    color: ${(props) => props.theme.color['gray-300']};
  }
`
