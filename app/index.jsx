import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from './components/constant/Colors.jsx';
import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./components/config/firebaseConfig.jsx";
import { doc, getDoc } from "firebase/firestore";
import { useContext } from "react";
import { UserDetailContext } from "./components/context/UserDetailContext.jsx";

export default function Index() {

  const router = useRouter();
  const {userDetail,setUserDetail} = useContext(UserDetailContext);

  onAuthStateChanged(auth,async(user) =>{
    if(user) {
      console.log(user);
      const result = await getDoc(doc(db,'users',user?.email));
      setUserDetail(result.data())
      router.replace('/components/(tabs)/home')
    }
  })

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
        }}>Bem Vindo ao App de Química</Text>

        <Text style={{
          fontSize:20,
          color: Colors.WHITE,
          marginTop:20,
          textAlign:'center',
          fontFamily:'outfit'
        }}>Tenha Acesso a Conteudo dedicado para Estudantes de Química</Text>

        <TouchableOpacity style={styles.button}
          onPress={() => router.push('/components/auth/SignUp')}
        >
          <Text style={[styles.ButtonText,{ color: Colors.PRIMARY }]}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/components/auth/SignIn')} style={[styles.button, {
          backgroundColor: Colors.PRIMARY,
          borderWidth: 1,
          borderColor:Colors.WHITE,
          }]}>
          <Text style={[styles.ButtonText, { color: Colors.WHITE }]}>Login</Text>
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