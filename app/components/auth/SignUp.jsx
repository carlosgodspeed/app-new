import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import React, { useState, useContext } from 'react';
import Colors from '../constant/Colors';
import { useRouter } from 'expo-router';
import { auth, db } from '../config/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { UserDetailContext } from '../context/UserDetailContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
export default function SignUp() {

    const router=useRouter();
    const [fullName, setFullName] = useState(); 
    const [email, setEmail] = useState(); 
    const [password, setPassword] = useState();
    const {userDetail,setUserDetail}=useContext(UserDetailContext);

    const CreateNewAccount=()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(async(resp)=>{
            const user=resp.user;
            console.log(user);
            await SaveUser(user);
        })

        .catch(e=>{
            console.log(e.message)
        })
    }

    const SaveUser=async(user)=>{
        const data={
            name:fullName,
            email:email,
            member:false,
            uid:user?.uid
        }
        await setDoc(doc(db, 'users',email),data)

        setUserDetail(data);
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
    <Image source={require('./../../assets/images/newAcount.png')}
    style={{
        width:180,
        height:180,
    }}  
    />

    <Text style={{
        fontSize:30,
        fontFamily: 'outfit-bold',
    }}>Cadastre-se</Text>

    <TextInput placeholder='Nome Completo' onChangeText={(value)=>setFullName(value)} style={styles.textInput} />
    <TextInput placeholder='Email' onChangeText={(value)=>setEmail(value)} style={styles.textInput} />
    <TextInput placeholder='Senha' onChangeText={(value)=>setPassword(value)} secureTextEntry={true} style={styles.textInput} />

    <TouchableOpacity
    onPress={CreateNewAccount}
    style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        width:'100%',
        marginTop:25,
        borderRadius:10,
    }}
    >
        <Text style={{
        fontFamily:'outfit',
        fontSize:20,
        color:Colors.WHITE,
        textAlign:'center',
        }}>Criar</Text>
        
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
        }}>Já Possui uma Conta?</Text>
        <Pressable
        onPress={()=> router.push('/components/auth/SignIn')}
        >
            <Text style={{
                color:Colors.PRIMARY,
                fontFamily:'outfit-bold',
            }}>Login</Text>
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