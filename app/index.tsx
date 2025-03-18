import { Text, View, Image } from "react-native";
import Colors from './../constant/Colors.jsx';
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE
      }}
    >
      <Image source={require("./../assets/images/landing.png")}
      style={{
        width: '100%',
        height: '300',
        marginTop:'70',
      }}
      />

      <View style={{
        padding:25,
        backgroundColor: Colors.PRIMARY,
        height: '100%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
      }}>
        <Text style={{
          fontSize:30,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>Welcome to Coaching Guru</Text>

        <Text style={{
          fontSize:20,
          color: Colors.WHITE,
          marginTop:20,
          textAlign:'center'
        }}>Transforme suas ideias em conteúdo educacional envolvente, sem esforço com IA</Text>

        <View style={styles.button}>
          <Text style={[styles.ButtonText,{ color: Colors.PRIMARY }]}>Login</Text>
        </View>
        <View style={[styles.button, {
           backgroundColor: Colors.PRIMARY,
           borderWidth: 1,
           borderColor:Colors.WHITE,
           }]}>
          <Text style={[styles.ButtonText, { color: Colors.WHITE }]}>Ainda não Possui uma Conta ?</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding:15,
    backgroundColor: Colors.WHITE,
    marginTop:20,
    borderRadius: 10,
  },
  ButtonText: {
    textAlign: 'center',
    fontSize: 20,
  }
});