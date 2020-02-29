import React , { Component } from 'react';
import { FlatList, SafeAreaView, Text,View, StyleSheet } from 'react-native';

const DATA = [
    {
        id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title:"Workout 1",
        days: ["Monday ", "Wednesday ", "Friday"]
    },
    {
        id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
        title:"Workout 2",
        days: ["Tuesday ", "Thursday ", "Saturday"]
    },
    {
        id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28be",
        title:"Workout 3",
        days: ["Daily"]
    }
]

function Workout({ title,days }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{days}</Text>
      </View>
    );
  }

export default class WorkoutsHome extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => 
                        <Workout title={item.title} 
                                days = {item.days}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
    },
    item: {
      backgroundColor: '#aabbff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    caption:{
        fontSize:18
    }
  });
  