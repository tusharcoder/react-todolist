import React from 'react';
import {Component} from 'react';
import {View, Text, ScrollView, Image, TextInput, FlatList} from 'react-native';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks : [
                {task:"this is my example task",flag_done:false}
            ]
        };
    }
    render(){
        return (
            <View style={{padding: 10}}>
            <TextInput
            style={{height: 40}}
            placeholder="Type here to add task"
            />

            <FlatList

            data = {this.state.tasks}
            renderItem={({item})=><Text>{item.task}</Text>}
  keyExtractor={(item, index) => index.toString()}            
            />
            </View>


        );
    }
}

export default App;
