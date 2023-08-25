import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Aside = styled.aside`
  
  article {
    background-color: ${colors.texto};
    height: 6rem;
    justify-content: center;
    border-radius: 5px;
    padding: 10px 5px;
    h3 {
        text-decoration: none;
        text-align: left;
    }
  }
`