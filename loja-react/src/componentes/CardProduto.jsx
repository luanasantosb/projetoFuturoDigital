import { Link } from 'react-router-dom'

export default function CardProduto({ produto }) {
  return (
    <Link to={`/produto/${produto.id}`} className="card">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco}</p>
    </Link>
  )
}
