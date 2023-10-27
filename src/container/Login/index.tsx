import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { SocialIcon } from '@rneui/themed';


const Login = () => {
  
  const [email,setemail]= useState('')
  const [pass,setpass]= useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SHUNIN</Text>
      <Text style={styles.subtitle}>Management App</Text>
      <Text style={styles.subtitle2}>Login to your account</Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#E9F0F3',
          paddingLeft: 10,
          borderRadius: 4,
          marginTop: 50,
          height: 50,
        }}>
        <AntDesign name={'mail'} style={{ fontSize: 20, marginTop: 13 }} />
        <TextInput
          placeholder="Enter your e-mail"
          placeholderTextColor={'black'}
          style={styles.txtinp}
          textAlign="left"
          value={email}
          onChangeText={text => setemail(text)}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#E9F0F3',
          paddingLeft: 10,
          borderRadius: 4,
          marginTop: 20,
          height: 50,
        }}>
        <Entypo name={'lock'} style={{ fontSize: 20, marginTop: 13 }} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={'black'}
          style={styles.txtinp}
          textAlign="left"
          value={pass}
          onChangeText={text => setpass(text)}

        ></TextInput>
      </View>
      <TouchableOpacity onPress={() => { }} style={styles.btn}>
        <Text style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 16, color: 'white'
        }}>Login</Text>
      </TouchableOpacity>

      <Text style={{
        marginTop: 25, alignSelf: "center", fontFamily: 'Poppins-Regular',
        fontSize: 15, color: 'black'
      }}>- Or Login with -</Text>


      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30 }}>
        <SocialIcon
          type="google"
          style={{width:60,height:60}}
          onPress={() => {

          }}
        />
        <SocialIcon
          type="facebook"
          style={{width:60,height:60}}

          onPress={() => {

          }}
        />
        <SocialIcon
          type="twitter"
          style={{width:60,height:60}}

          onPress={() => {

          }}
        />
      </View>
          <View style={{flexDirection:'row',marginTop:20,justifyContent:'center'}}>
            <Text style={{fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#9A9A9A',}}>Do you have an account?</Text>
            <TouchableOpacity><Text style={{fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#006EE9',}}> Sign Up</Text></TouchableOpacity>
          </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: '20%',
    backgroundColor: 'white'
  },
  title: {
    fontFamily: 'Righteous-Regular',
    fontSize: 34,
    color: '#006EE9',
    alignSelf: 'center',

  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: '#9A9A9A',
    alignSelf: 'center',
  },
  subtitle2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#474',
    alignSelf: 'center',
    marginTop: "15%"
  },
  txtconatainer: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#006EE9',
    height: 50,
    paddingLeft: 10,
    alignItems: 'center',
    borderColor: '#9A9A9A',
    borderWidth: 0.5
  },
  txtinp: {
    color: 'black', paddingLeft: 20
    // backgroundColor: 'white',
    // width:'%'
  },
  icon: {
    marginRight: 10
  },
  btn: {
    height: 50,
    backgroundColor: '#006EE9',
    borderRadius: 10,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})