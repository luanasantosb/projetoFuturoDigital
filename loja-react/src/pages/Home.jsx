import { useEffect, useState } from 'react'
import { getServices } from '../api/services'
import CardProduto from '../components/CardProduto'

export default function Home() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    getServices().then(res => setProdutos(res.data))
  }, [])

  return (
    <section className="grid">
      {produtos.map(produto => (
        <CardProduto key={produto.id} produto={produto} />
      ))}
    </section>
  )
}
