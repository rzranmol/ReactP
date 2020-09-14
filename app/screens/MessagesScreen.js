import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initalMessages = [
  {
    id: 1,
    title: 'Anmol Shrestha',
    description: 'D1',
    image: require('../assets/anmol.jpg'),
  },
  {
    id: 2,
    title: 'Anmol Shrestha',
    description: 'D2',
    image: require('../assets/anmol.jpg'),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initalMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //delete from messages
    //const messages=
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log('Message Selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'ANmol Shrestha',
              description: 'Dasds2',
              image: require('../assets/anmol.jpg'),
            },
          ]);
        }}
      ></FlatList>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default MessagesScreen;
