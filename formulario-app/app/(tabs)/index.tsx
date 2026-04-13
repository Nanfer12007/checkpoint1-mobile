import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaskedTextInput } from 'react-native-mask-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [rm, setRm] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  // 🔄 Recuperar dados ao abrir app
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosSalvos = await AsyncStorage.getItem('usuario');

        if (dadosSalvos) {
          const dados = JSON.parse(dadosSalvos);

          setNome(dados.nome || '');
          setRm(dados.rm || '');
          setCurso(dados.curso || '');
          setDisciplina(dados.disciplina || '');
          setDescricao(dados.descricao || '');
          setTelefone(dados.telefone || '');
          setCpf(dados.cpf || '');
        }
      } catch (error) {
        console.log('Erro ao carregar dados:', error);
      }
    };

    carregarDados();
  }, []);

  // 🚀 Enviar formulário
  const handleEnviar = async () => {
    // ✅ Validação
    if (!nome || !rm || !curso || !disciplina || !descricao || !telefone || !cpf) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const dados = {
      nome,
      rm,
      curso,
      disciplina,
      descricao,
      telefone,
      cpf
    };

    try {
      // 💾 Salvar no AsyncStorage
      await AsyncStorage.setItem('usuario', JSON.stringify(dados));

      // 🔄 Navegar
      router.push({
        pathname: '/perfil',
        params: {
          nome,
          rm,
          telefone,
          cpf
        }
      });

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Formulário de Cadastro</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>RM</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu RM"
            value={rm}
            onChangeText={(text) => setRm(text.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Curso</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu curso"
            value={curso}
            onChangeText={setCurso}
          />

          <Text style={styles.label}>Disciplina</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a disciplina"
            value={disciplina}
            onChangeText={setDisciplina}
          />

          <Text style={styles.label}>Telefone</Text>
          <MaskedTextInput
            style={styles.input}
            mask="(99) 99999-9999"
            placeholder="Digite seu telefone"
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>CPF</Text>
          <MaskedTextInput
            style={styles.input}
            mask="999.999.999-99"
            placeholder="Digite seu CPF"
            value={cpf}
            onChangeText={(text) => setCpf(text)}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Fale sobre você"
            value={descricao}
            onChangeText={setDescricao}
            multiline
            numberOfLines={3}
          />

          <View style={styles.botao}>
            <Button title="Enviar" onPress={handleEnviar} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  form: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top'
  },
  botao: {
    marginTop: 10
  }
});