import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getProductById } from '../lib/api';

export default function Details({ route }) {
  const { id } = route.params || {};
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

  if (status === 'loading') return <Loader />;
  if (status === 'error')   return <Centered><Text>Erro ao carregar produto.</Text></Centered>;
  if (!product)             return <Centered><Text>Produto não encontrado.</Text></Centered>;

  const nome  = product.nome ?? product.name ?? `Produto ${product.id}`;
  const preco = typeof product.preco === 'number' ? product.preco :
                typeof product.price === 'number' ? product.price : null;
  const desc  = product.descricao ?? product.description ?? '';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      {preco != null && <Text style={styles.price}>R$ {preco.toFixed(2)}</Text>}
      {desc ? <Text style={styles.desc}>{desc}</Text> : null}
    </View>
  );
}

function Loader() {
  return (
    <Centered>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 8 }}>Carregando...</Text>
    </Centered>
  );
}

function Centered({ children }) {
  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>{children}</View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 32 },
  title: { fontSize: 22, fontWeight: '700' },
  price: { marginTop: 8, fontSize: 16, color: '#333' },
  desc: { marginTop: 12, fontSize: 14, color: '#555' },
});
