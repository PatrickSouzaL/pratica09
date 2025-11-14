import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../lib/api';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setStatus('loading');
        const data = await getProductById(id);
        if (mounted) {
          setProduct(data);
          setStatus('idle');
        }
      } catch (e) {
        console.error(e);
        if (mounted) setStatus('error');
      }
    })();
    return () => { mounted = false; };
  }, [id]);

  if (status === 'loading') return <p>Carregando...</p>;
  if (status === 'error')   return <p>Erro ao carregar produto.</p>;
  if (!product)             return (
    <div>
      <p>Produto não encontrado.</p>
      <Link to="/">Voltar</Link>
    </div>
  );

  const nome  = product.nome ?? product.name ?? `Produto ${product.id}`;
  const preco = typeof product.preco === 'number' ? product.preco :
                typeof product.price === 'number' ? product.price : null;
  const desc  = product.descricao ?? product.description ?? '';

  return (
    <div>
      <h1>{nome}</h1>
      {preco != null && <p><strong>Preço:</strong> R$ {preco.toFixed(2)}</p>}
      {desc && <p><strong>Descrição:</strong> {desc}</p>}
      <Link to="/" style={{ marginTop: 12, display: 'inline-block' }}>Voltar</Link>
    </div>
  );
}
