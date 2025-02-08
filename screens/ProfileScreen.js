import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  const user = {
    username: '@user123',
    followers: 100,
    following: 50,
    posts: 10,
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/profile-pic.jpg' }}
        style={styles.profilePic}
      />
      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.stats}>
        {user.followers} Followers | {user.following} Following
      </Text>
      <Text style={styles.stats}>{user.posts} Posts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16, backgroundColor: '#fff' },
  profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
  username: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  stats: { fontSize: 16, color: '#555', marginBottom: 4 },
});

export default ProfileScreen;
