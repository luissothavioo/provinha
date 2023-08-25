import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { RouteSoftware } from "./assets/router"
import { BrowserRouter } from "react-router-dom"

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RouteSoftware />
    </BrowserRouter>
  )
}