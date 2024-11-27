import React from "react";
import { View , Text , FlatList } from 'react-native';

interface Item {
  id: number;
  title: string;
}

const data: Item[] = [
  {id: 1 , title: 'React Native'},
  {id: 2 , title: 'Typescript'},
  {id: 3 , title: 'Javascript'},
  {id: 4 , title: 'C#'},
  {id: 5 , title: 'Css'},
];

const ItemList = () => {
  const renderItem = ({item}: {item: Item}) =>
  (
    <View style={{padding: 5}}>
    <Text>{item.id} - {item.title}</Text>
    </View>
  );

  return (
    <FlatList
    data= {data}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderItem}
    />
  );
};

export default ItemList;