import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Main = styled.main`
  min-height: calc(100vh - 9rem);

  div {
    list-style-type: none;
    display: flex;
    align-items: center;
    background-color: ${colors.texto};
    padding: 1rem;
      height: 100%;
      display: flex;
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
`