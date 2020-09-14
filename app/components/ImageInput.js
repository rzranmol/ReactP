import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImagesPicker from './ImagesPicker';

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert('You need to enable Permission.');
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are YOu Sure?', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Image,
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log('error Reading', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
export default ImageInput;
