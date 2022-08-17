import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto Mono !important'
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
    button{
      border-radius:1vmin !important;
    }
    h3,h4{
      font-family: 'Roboto';
      font-weight:'500 !important'
    }
    h1,h2{
      font-family: 'Roboto Mono';
      font-weight:'500 !important'
    }
  }
`

export default GlobalStyle
