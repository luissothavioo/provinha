import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  max-width: 1090px;
  padding: 1rem;
  div {
    background-color: ${colors.texto};
    height: 3rem;
    justify-content: center;
    border-radius: 5px;
    h3 {
        text-decoration: none;
        text-align: center;
        font-size: x-large;
    }
  }
`