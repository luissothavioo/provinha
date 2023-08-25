import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  background-color: ${colors.menu1};
  display: grid;
  grid-template-columns: auto auto;
  height: 6rem;
  align-items: center;
  padding-left: 1rem;
  h1 {
    color: white;

  }
`

export const NavBar = styled.nav`
  /* Navegação */
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  width: 10rem;
  justify-content: right;
  background-color: white;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
  }

`