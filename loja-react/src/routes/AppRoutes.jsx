import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import MeusPedidos from '../pages/MeusPedidos'
import Detalhes from '../pages/Detalhes'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/meus-pedidos" element={<MeusPedidos />} />
      <Route path="/produto/:id" element={<Detalhes />} />
    </Routes>
  )
}
