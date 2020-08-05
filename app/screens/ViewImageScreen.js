import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image style={styles.image} source={require('../assets/chair.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
export default ViewImageScreen;
