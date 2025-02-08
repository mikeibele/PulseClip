import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';

const DiscoverScreen = () => {
  const trendingHashtags = ['#ReactNative', '#TikTokClone', '#JavaScript'];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#888"
      />
      <FlatList
        data={trendingHashtags}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.hashtag}>{item}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  hashtag: { fontSize: 18, marginVertical: 10, color: '#555' },
});

export default DiscoverScreen;
