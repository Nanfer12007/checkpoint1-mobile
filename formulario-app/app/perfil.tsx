import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Perfil() {
  const { nome, rm } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Perfil</Text>

      <Image
        source={{ uri: 'https://i.pravatar.cc/150' }}
        style={styles.foto}
      />

      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>RM: {rm}</Text>
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