import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const notifications = [
  {
    id: '1',
    type: 'New followers',
    message: 'Mabel T started following you.',
    time: '2h ago',
    profilePic: 'https://example.com/profile1.jpg', // Replace with actual image URL
  },
  {
    id: '2',
    type: 'Activity',
    message: 'wondersempire6 added your video to Favorites.',
    time: '4h ago',
    profilePic: 'https://example.com/profile2.jpg', // Replace with actual image URL
  },
  {
    id: '3',
    type: 'Message',
    message: 'DC FAMOUS sent you a message.',
    time: '2h ago',
    profilePic: 'https://example.com/profile3.jpg', // Replace with actual image URL
  },
  {
    id: '4',
    type: 'System notifications',
    message: 'TikTok: Updates to your post performance...',
    time: '6h ago',
    profilePic: 'https://example.com/profile4.jpg', // Replace with actual image URL
  },
  {
    id: '5',
    type: 'LyricsLibrary',
    message: 'Active 4h ago',
    time: '',
    profilePic: 'https://example.com/profile5.jpg', // Replace with actual image URL
  },
];

const InboxScreen = () => {
  const renderNotification = ({ item }) => (
    <TouchableOpacity style={styles.notificationItem}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      <View style={styles.messageContainer}>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.message}>{item.message}</Text>
        {item.time ? <Text style={styles.time}>{item.time}</Text> : null}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Inbox</Text>
        <View style={styles.headerRight}>
          <Text style={styles.statusDot}>●</Text>
          <Text style={styles.onlineStatus}>Online</Text>
        </View>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  statusDot: { fontSize: 14, color: 'green', marginRight: 4 },
  onlineStatus: { fontSize: 14, color: '#333' },
  list: { paddingHorizontal: 16 },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profilePic: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  messageContainer: { flex: 1 },
  type: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  message: { fontSize: 14, color: '#555' },
  time: { fontSize: 12, color: '#999', marginTop: 4 },
});

export default InboxScreen;
