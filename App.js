import React from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';

export default function App(){

    return (
        <ScrollView>
            <Text>Some Text</Text>
            <View>
                <Text>Some more text</Text>
                <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style={{width:400, height:200}}/>
            </View>
        <TextInput 
            style={{
                height:40,
                borderColor:'gray',
                borderWidth:1
            }}
        defaultValue="You can type in me"
        />
        </ScrollView>
    );
}
