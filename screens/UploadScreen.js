import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadScreen = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });

    if (!result.canceled) {
      setSelectedVideo(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {selectedVideo ? (
        <Text style={styles.videoPath}>{selectedVideo}</Text>
      ) : (
        <Text>No video selected</Text>
      )}
      <Button title="Pick a Video" onPress={pickVideo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  videoPath: { fontSize: 14, marginVertical: 10, color: '#333' },
});

export default UploadScreen;
