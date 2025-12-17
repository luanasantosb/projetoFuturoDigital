import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getServiceById } from '../api/services'

export default function Detalhes() {
  const { id } = useParams()
  const [produto, setProduto] = useState(null)

  useEffect(() => {
    getServiceById(id).then(res => setProduto(res.data))
  }, [id])

  if (!produto) return <p>Carregando...</p>

  return (
    <section>
      <img src={produto.imagem} alt={produto.nome} />
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <strong>R$ {produto.preco}</strong>
    </section>
  )
}
