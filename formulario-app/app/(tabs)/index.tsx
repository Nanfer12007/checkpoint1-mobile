import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaskedTextInput } from 'react-native-mask-text';

export default function App() {
  const router = useRouter();

  // Estados do formulário
  const [nome, setNome] = useState('');
  const [rm, setRm] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  // useEffect executado ao carregar o app
  useEffect(() => {
    console.log('Aplicativo iniciado com sucesso!');
  }, []);

  // Função de envio
  const handleEnviar = () => {
    if (!nome || !rm || !curso || !disciplina || !descricao || !telefone || !cpf) {
      alert('Preencha todos os campos!');
      return;
    }

    router.push({
      pathname: '/perfil',
      params: {
        nome,
        rm,
        telefone,
        cpf
      }
    });
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
            placeholder="Fale um pouco sobre você (2-3 linhas)"
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