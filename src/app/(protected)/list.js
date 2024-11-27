import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import { getSculptures, deleteSculpture } from '../../database/useSculpturesDatabase'; // Verifique o caminho

export default function List() {
  const [sculptures, setSculptures] = useState([]);

  useEffect(() => {
    async function fetchSculptures() {
      try {
        const sculpturesData = await getSculptures();
        setSculptures(sculpturesData); // Atualiza a lista de esculturas
      } catch (error) {
        console.error("Erro ao buscar esculturas:", error);
      }
    }

    fetchSculptures();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSculpture(id);
      const updatedSculptures = await getSculptures(); // Atualiza a lista após a exclusão
      setSculptures(updatedSculptures);
    } catch (error) {
      console.error("Erro ao deletar escultura:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.sculptureItem}>
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.type}>{item.tipo}</Text>
      <Text>{item.descricao}</Text>
      {item.imagem ? <Image source={{ uri: item.imagem }} style={styles.image} /> : null}
      <Button title="Deletar" onPress={() => handleDelete(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Esculturas</Text>
      <FlatList
        data={sculptures}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  sculptureItem: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    fontStyle: 'italic',
    color: '#666',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});
