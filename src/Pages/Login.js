import React from 'react';
import UserList from '../constants/index';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert, StyleSheet } from 'react-native';

const Login = React.memo(({ navigation }) => {
    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = () => {
        console.log('handle submit',emailAddress, password);
        const userLogin = UserList.find(findUser);
        if(userLogin)
        {
            navigation.navigate('Home');
        } else { Alert.alert('invalid User id or Password')}
    }
    const findUser = (userData) => {
        return userData.email === emailAddress && userData.password === password;
    }
    return (
        <SafeAreaView style={{alignItems: 'center'}}>
            <View style={LoginStyle.container}>
                <TextInput placeholder="Email" style={LoginStyle.textInputs} onChangeText={(e) => setEmailAddress(e)} />
                <TextInput placeholder="Password" style={LoginStyle.textInputs} onChangeText={(e) => setPassword(e)} />
                <TouchableOpacity style={LoginStyle.loginButton} onPress={handleSubmit}><Text>Login</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
});

export default Login;

const LoginStyle = StyleSheet.create({
    container: {
        borderWidth: 1,
        alignItems: 'center',
        marginTop: '40%',
        width: '80%',
    },
    textInputs: {
      borderWidth: 1,
      borderRadius: 15,
      height: 30,
      width: '80%',
      alignSelf: 'center',
      marginVertical: 5,
      paddingHorizontal: 10,
      borderColor: 'grey',
    },
    loginButton: {
        borderWidth: 1,
        width: '50%',
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderColor: 'grey',

    }
  });