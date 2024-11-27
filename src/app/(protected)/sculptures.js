import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet, Image, Alert } from 'react-native';
import { addSculpture } from '../../database/useSculpturesDatabase';

export default function SculpturesScreen() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddSculpture = async () => {
    if (!nome || !tipo) {
      alert('Nome e Tipo são obrigatórios!');
      return;
    }

    setLoading(true);

    try {
      console.log('Adicionando escultura...');
      const result = await addSculpture(nome, tipo, descricao, imagem);
      
      // Verifica se a adição foi bem-sucedida
      if (result) {
        console.log('Escultura adicionada com sucesso!');
        alert('Escultura adicionada com sucesso!');
      } else {
        alert('Erro ao adicionar escultura');
      }

      // Limpar campos
      setNome('');
      setTipo('');
      setDescricao('');
      setImagem('');
    } catch (error) {
      console.error('Erro ao adicionar escultura:', error);
      alert('Erro ao adicionar escultura');
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Escultura</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo"
        value={tipo}
        onChangeText={setTipo}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Imagem (URL)"
        value={imagem}
        onChangeText={setImagem}
      />

      <Button title={loading ? 'Carregando...' : 'Adicionar Escultura'} onPress={handleAddSculpture} disabled={loading} />

      {imagem ? (
        <Image source={{ uri: imagem }} style={styles.image} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 16,
  },
});
