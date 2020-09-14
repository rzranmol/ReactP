import React, { useEffect, useState } from 'react';
import { Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Screen from './Screen';

function ImagesPicker(props) {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert('You need to enable Permission.');
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log('error Reading', error);
    }
  };
  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
export default ImagesPicker;
