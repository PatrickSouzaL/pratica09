import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { getProducts } from '../lib/api';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('idle');

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

  if (status === 'loading') return <Loader />;
  if (status === 'error')   return <Centered><Text>Erro ao carregar produtos.</Text></Centered>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { id: item.id })}
          >
            <Text style={styles.name}>{item.nome ?? item.name ?? `Produto ${item.id}`}</Text>
            <Text style={styles.price}>
              {typeof item.preco === 'number' ? `R$ ${item.preco.toFixed(2)}` :
               typeof item.price === 'number' ? `R$ ${item.price.toFixed(2)}` : ''}
            </Text>
          </TouchableOpacity>
        )}
      />
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
  title: { fontSize: 24, fontWeight: '700', marginBottom: 16 },
  card: { padding: 16, borderRadius: 12, backgroundColor: '#fff', elevation: 2 },
  name: { fontSize: 16, fontWeight: '600' },
  price: { marginTop: 4, color: '#555' },
});
