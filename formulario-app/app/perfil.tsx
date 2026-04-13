import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Perfil() {
  const { nome, rm, telefone, cpf } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Perfil</Text>

      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGGKATzHL7a1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710191548814?e=1777507200&v=beta&t=dQd68rduUl1IEUdxRRjnoZDSiNAcrzDGSRAo3052eu0' }}
        style={styles.foto}
      />

      <Text style={styles.texto}>Nome: {nome || 'Não informado'}</Text>
      <Text style={styles.texto}>RM: {rm || 'Não informado'}</Text>
      <Text style={styles.texto}>Telefone: {telefone || 'Não informado'}</Text>
      <Text style={styles.texto}>CPF: {cpf || 'Não informado'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },
  texto: {
    fontSize: 18,
    marginBottom: 10
  }
});