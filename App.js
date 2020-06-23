import React from 'react';
import {Component} from 'react';
import {View, Text, ScrollView, Image, TextInput, FlatList, Button} from 'react-native';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks : [
            ],
            currentTask:"",
        };
    }
    addTask = ()=>{
        let tasks = this.state.tasks;
        tasks.push({task:this.state.currentTask,flasgDone:false});
        this.setState({tasks:tasks});

    }
    render(){
        const {currentTask} = this.state
        return (
            <View style={{padding: 10}}>
            <TextInput
            style={{height: 40}}
            placeholder="Type here to add task"
            onChangeText = {(currentTask)=>this.setState({currentTask: currentTask})}
            />

            <FlatList

            data = {this.state.tasks}
            renderItem={({item})=><Text>{item.task}</Text>}
            keyExtractor={(item, index) => index.toString()}            
            />

            <Button 
            title = "Add Task"
            onPress={this.addTask}
            />

            </View>


        );
    }
}

export default App;
