import { Routes, Route } from "react-router-dom"
import { PageDescricao, PageTopicos, PageLayout } from "../pages/index"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="topicos" element={<PageTopicos />} />
        <Route path="descricao" element={<PageDescricao />} />
      </Route>
    </Routes>
  )
}