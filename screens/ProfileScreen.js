// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const ProfileScreen = () => {
//   const user = {
//     username: '@user123',
//     followers: 100,
//     following: 50,
//     posts: 10,
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: 'https://example.com/profile-pic.jpg' }}
//         style={styles.profilePic}
//       />
//       <Text style={styles.username}>{user.username}</Text>
//       <Text style={styles.stats}>
//         {user.followers} Followers | {user.following} Following
//       </Text>
//       <Text style={styles.stats}>{user.posts} Posts</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', padding: 16, backgroundColor: '#fff' },
//   profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
//   username: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
//   stats: { fontSize: 16, color: '#555', marginBottom: 4 },
// });

// export default ProfileScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ProfileScreen = () => {
  const user = {
    username: '@video_lyrics01',
    followers: 813,
    following: 26,
    likes: 7031,
  };

  const posts = [
    { id: 1, title: 'MY AMIGO', views: '2,542', pinned: true },
    { id: 2, title: 'DESPERADO MANY', views: '1,128', pinned: true },
    { id: 3, title: 'LEOSTAYTRILL X REMA', views: '30.1K', pinned: true },
    { id: 4, title: 'TENI - Unreleased', views: '6', pinned: false },
    { id: 5, title: 'OFFSET - CLOUT', views: 'N/A', pinned: false },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s', // Replace with your actual image URL
          }}
          style={styles.profilePic}
        />
        <View style={styles.info}>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.bio}>H.O.M.E OF MUSIC 🎶 ENTERTAINMENT ♻️</Text>
          <Text style={styles.stats}>
            {user.following} Following | {user.followers} Followers |{' '}
            {user.likes} Likes
          </Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Posts Section */}
      <View style={styles.postsContainer}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            {post.pinned && <Text style={styles.pinned}>Pinned</Text>}
            <Image
              source={{ uri: 'https://example.com/post-image.jpg' }} // Replace with actual post thumbnail
              style={styles.postImage}
            />
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postViews}>{post.views} views</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
  info: { alignItems: 'center' },
  username: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  bio: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 8 },
  stats: { fontSize: 14, color: '#666' },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: { fontSize: 14, color: '#000' },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  post: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#eee',
  },
  pinned: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 12,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 1,
  },
  postImage: { width: '100%', height: 120 },
  postTitle: { fontSize: 14, fontWeight: 'bold', margin: 4 },
  postViews: { fontSize: 12, color: '#666', margin: 4 },
});

export default ProfileScreen;
