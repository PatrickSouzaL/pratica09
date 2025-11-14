import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../lib/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('idle'); // idle|loading|error

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setStatus('loading');
        const data = await getProducts();
        if (mounted) {
          setProducts(Array.isArray(data) ? data : []);
          setStatus('idle');
        }
      } catch (e) {
        console.error(e);
        if (mounted) setStatus('error');
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (status === 'loading') return <p>Carregando...</p>;
  if (status === 'error')   return <p>Erro ao carregar produtos.</p>;

  return (
    <div>
      <h1>Produtos</h1>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {products.map((p) => (
          <li key={p.id} style={{ margin: '12px 0', padding: 12, border: '1px solid #eee', borderRadius: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{p.nome ?? p.name ?? `Produto ${p.id}`}</strong>
              <span>
                {typeof p.preco === 'number' ? `R$ ${p.preco.toFixed(2)}` :
                 typeof p.price === 'number' ? `R$ ${p.price.toFixed(2)}` : ''}
              </span>
            </div>
            <Link to={`/product/${p.id}`} style={{ display: 'inline-block', marginTop: 8 }}>
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
