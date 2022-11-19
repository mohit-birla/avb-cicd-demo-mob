import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

const Home = React.memo(({ navigation }) => {

    return (
        <SafeAreaView>
            <View>
                <Text style={{color:'black'}}>Home screen1</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text>Logout</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
});

export default Home;