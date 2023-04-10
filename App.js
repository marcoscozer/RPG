
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RPG from './src/components/RPG';

export default function App() {

  const rpgs = [
    {
      nomeItem: 'Livro de Magia',
      descricaoItem: 'Poder de Cura +20 / Poder de Defesa +15',
      imgUrl: "https://img.freepik.com/fotos-premium/livro-de-feiticos-de-rpg-objeto-de-item-de-rpg-isometrico-para-jogo-de-rpg-generative-ai_742252-8947.jpg?w=2000"
    },

    {
      nomeItem: 'Elmo',
      descricaoItem: 'Poder de Atk +35 / Aumento de HP em 3%',
      imgUrl: "https://pm1.narvii.com/6514/47bc5e943ad276c92886c1ff1ec827172086ba87_hq.jpg"
    },

    {
      nomeItem: 'Escudo',
      descricaoItem: 'Poder de defesa +10 / Aumento de mana em 5%',
      imgUrl: "https://cdn.w600.comps.canstockphoto.com.br/escudo-rpg-%C3%ADcone-jogo-espadas-cliparte-vetor_csp78777008.jpg"
    },
    
  ]

  return (
    <View style={styles.container}>
      {rpgs.map(r => <RPG rpg={r}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
