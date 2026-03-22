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

export default function App() {
  // Estados do formulário
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');

  // Estado para exibir dados enviados
  const [dadosEnviados, setDadosEnviados] = useState(null);

  // useEffect executado ao carregar o app
  useEffect(() => {
    console.log('Aplicativo iniciado com sucesso!');
  }, []);

  // Função de envio
  const handleEnviar = () => {
    const dados = {
      nome,
      curso,
      disciplina,
      descricao
    };

    setDadosEnviados(dados);
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

        {dadosEnviados && (
          <View style={styles.resultado}>
            <Text style={styles.subtitulo}>Dados Enviados:</Text>

            <Text style={styles.texto}><Text style={styles.negrito}>Nome:</Text> {dadosEnviados.nome}</Text>
            <Text style={styles.texto}><Text style={styles.negrito}>Curso:</Text> {dadosEnviados.curso}</Text>
            <Text style={styles.texto}><Text style={styles.negrito}>Disciplina:</Text> {dadosEnviados.disciplina}</Text>
            <Text style={styles.texto}><Text style={styles.negrito}>Descrição:</Text> {dadosEnviados.descricao}</Text>
          </View>
        )}
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
  },
  resultado: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e0f7fa',
    borderRadius: 8
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  texto: {
    fontSize: 16,
    marginBottom: 5
  },
  negrito: {
    fontWeight: 'bold'
  }
});
