import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from './components/constant/Colors.jsx';
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE
      }}
    >
      <Image source={require("./assets/images/landing.png")}
      style={{
        width: '100%',
        height: 300,
        marginTop: 70,
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
          fontSize:20,
          textAlign: 'center',
          color: Colors.WHITE,
          fontFamily:'outfit-bold',
        }}>Welcome to Coaching Guru</Text>

        <Text style={{
          fontSize:20,
          color: Colors.WHITE,
          marginTop:20,
          textAlign:'center',
          fontFamily:'outfit'
        }}>Transforme suas ideias em conteúdo educacional envolvente, sem esforço com IA</Text>

        <TouchableOpacity style={styles.button}
          onPress={() => router.push('/components/auth/SignUp')}
        >
          <Text style={[styles.ButtonText,{ color: Colors.PRIMARY }]}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/components/auth/SignIn')} style={[styles.button, {
          backgroundColor: Colors.PRIMARY,
          borderWidth: 1,
          borderColor:Colors.WHITE,
          }]}>
          <Text style={[styles.ButtonText, { color: Colors.WHITE }]}>Already have account</Text>
        </TouchableOpacity>

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
    fontFamily:'outfit'
  },
  ImageStyle:{
    
  }
});