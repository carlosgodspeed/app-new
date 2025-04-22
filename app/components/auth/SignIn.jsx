import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable, ToastAndroid, ActivityIndicator } from 'react-native';
import React, { useState, useContext } from 'react';
import Colors from '../constant/Colors';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { UserDetailContext } from '../context/UserDetailContext';

export default function SignIn() {

    const router=useRouter();
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();
    const {userDetail,setUserDetail} = useContext(UserDetailContext);
    const [loading,setLoading] = useState(false);

    const onSignInClick = () => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(async(resp)=> {
                const user=resp.user
                console.log(user)
                await getUserDetail();
                setLoading(false);
                router.replace("/components/(tabs)/home")
            }).catch( erro => {
                console.log(erro)
                setLoading(false);
                ToastAndroid.show('Email ou Senha Incorretos',ToastAndroid.BOTTOM)
            })
    }

    const getUserDetail = async () =>{
        const result = await getDoc( doc ( db,'users',email ));
        console.log(result.data());
        setUserDetail(result.data());
    }

return (
    <View style={{
        display:'flex',
        alignItems:'center',
        paddingTop:100,
        flex:1,
        padding:25,
        backgroundColor:Colors.WHITE,
    }}>
    <Image source={require('./../../assets/images/Login.png')}
    style={{
        width:180,
        height:180,
    }}  
    />

    <Text style={{
        fontSize:30,
        fontFamily: 'outfit-bold',
    }}>Bem Vindo</Text>

    <TextInput placeholder='Email'
    onChangeText={(value)=>setEmail(value)}
    style={styles.textInput} 
    />

    <TextInput placeholder='Senha'
    onChangeText={(value)=>setPassword(value)}
    secureTextEntry={true} 
    style={styles.textInput} 
    />

    <TouchableOpacity
    onPress={onSignInClick}
    disabled={loading}
    style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        width:'100%',
        marginTop:25,
        borderRadius:10,
    }}
    >
    {!loading?<Text style={{
        fontFamily:'outfit',
        fontSize:20,
        color:Colors.WHITE,
        textAlign:'center',
        }}>Login</Text>:
        <ActivityIndicator size={'large'} color={Colors.WHITE} />
    }
        
        </TouchableOpacity>

        <View style={{
            backgroundColor:Colors.WHITE,
            display:'flex',
            flexDirection:'row',
            gap:5,
            marginTop:20,
        }}>
        <Text style={{
            fontFamily:'outfit',
        }}>Não Possui uma Conta?</Text>
        <Pressable
        onPress={()=> router.push('/components/auth/SignUp')}
        >
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-bold',
            }}>Criar Conta</Text>
        </Pressable>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        width:'100%',
        padding:15,
        fontSize:18,
        marginTop:20,
        borderRadius:8,
        fontFamily:'outfit-bold',
        backgroundColor:'#313131',
    }
})